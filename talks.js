// Renders upcoming and past events from the events.json kept in the talks repo.
(function () {
  var REMOTE = "https://raw.githubusercontent.com/sammcruz/talks/main/data/events.json";
  var LOCAL = "data/events.json";
  var isLocal = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);

  var upcomingEl = document.getElementById("upcoming-list");
  var pastEl = document.getElementById("past-list");
  var statsEl = document.getElementById("talk-stats");

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function parse(d) {
    var p = d.split("-");
    return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
  }

  function fmt(ev) {
    var opts = { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" };
    var s = parse(ev.date).toLocaleDateString("en-GB", opts);
    if (ev.end_date) {
      var a = parse(ev.date), b = parse(ev.end_date);
      if (a.getUTCMonth() === b.getUTCMonth() && a.getUTCFullYear() === b.getUTCFullYear()) {
        return a.getUTCDate() + "–" + b.toLocaleDateString("en-GB", opts);
      }
      return s + " – " + b.toLocaleDateString("en-GB", opts);
    }
    return s;
  }

  function link(href, label) {
    var a = el("a", "pill", label);
    a.href = href;
    a.rel = "noopener";
    return a;
  }

  function card(ev, base) {
    var c = el("article", "event");
    c.appendChild(el("div", "event-date", fmt(ev)));
    var body = el("div", "event-body");
    body.appendChild(el("h3", null, ev.event));
    if (ev.title) body.appendChild(el("p", "event-title", ev.title));
    var meta = [ev.role, ev.with && ev.with.length ? "with " + ev.with.join(", ") : "", ev.mode === "online" ? "Online" : [ev.venue, (ev.venue && ev.city && ev.venue.indexOf(ev.city) !== -1) ? "" : ev.city, ev.country].filter(Boolean).join(", ")]
      .filter(Boolean).join(" · ");
    body.appendChild(el("p", "event-meta", meta));
    var links = ev.links || {};
    var row = el("div", "event-links");
    if (links.event) row.appendChild(link(links.event, "Event page"));
    if (links.slides) row.appendChild(link(/^https?:/.test(links.slides) ? links.slides : base + links.slides, "Slides"));
    if (links.recording) row.appendChild(link(links.recording, "Recording"));
    if (row.children.length) body.appendChild(row);
    c.appendChild(body);
    return c;
  }

  function render(data) {
    var base = data.slides_base || "";
    var today = new Date();
    today = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    var evs = (data.events || []).slice();
    var upcoming = evs.filter(function (e) { return parse(e.end_date || e.date) >= today; })
      .sort(function (a, b) { return parse(a.date) - parse(b.date); });
    var past = evs.filter(function (e) { return parse(e.end_date || e.date) < today; })
      .sort(function (a, b) { return parse(b.date) - parse(a.date); });

    if (upcoming.length) {
      upcoming.forEach(function (e) { upcomingEl.appendChild(card(e, base)); });
    } else {
      upcomingEl.appendChild(el("p", "empty", "No events announced right now. Want me at yours? Get in touch below."));
    }

    if (pastEl) {
      var year = null;
      past.forEach(function (e) {
        var y = parse(e.date).getUTCFullYear();
        if (y !== year) { year = y; pastEl.appendChild(el("h3", "year", String(y))); }
        pastEl.appendChild(card(e, base));
      });
    }

    if (statsEl) {
      var cities = {};
      evs.forEach(function (e) { if (e.city && e.mode !== "online") cities[e.city] = 1; });
      var slides = evs.filter(function (e) { return e.links && e.links.slides; }).length;
      statsEl.textContent = evs.length + " events · " + Object.keys(cities).length + " cities · " + slides + " decks to download";
    }
  }

  function fail() {
    upcomingEl.appendChild(el("p", "empty", "The events list could not be loaded. You can browse everything in the talks repository on GitHub."));
  }

  function load(url) {
    fetch(url, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(render)
      .catch(fail);
  }

  load(isLocal ? LOCAL : REMOTE);
})();
