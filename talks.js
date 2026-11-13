// Renders upcoming and past events from the events.json kept in the talks repo.
(function () {
  var REMOTE = "https://raw.githubusercontent.com/sammcruz/talks/main/data/events.json";
  var LOCAL = "data/events.json";
  var isLocal = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);

  var upcomingEl = document.getElementById("upcoming-list");
  var pastEl = document.getElementById("past-list");
  var statsEl = document.getElementById("talk-stats");
  var lastData = null;
  var scrolledToTabs = false;
  var drawn = false;
  var failed = false;

  function tr(key, fallback) {
    return window.i18n ? window.i18n.t(key, fallback) : fallback;
  }

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

  function day(d) {
    var mon = window.i18n ? window.i18n.monthShort(d) : d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
    return d.getUTCDate() + " " + mon + " " + d.getUTCFullYear();
  }

  function fmt(ev) {
    var s = day(parse(ev.date));
    if (ev.end_date) {
      var a = parse(ev.date), b = parse(ev.end_date);
      if (a.getUTCMonth() === b.getUTCMonth() && a.getUTCFullYear() === b.getUTCFullYear()) {
        return a.getUTCDate() + "–" + day(b);
      }
      return s + " – " + day(b);
    }
    return s;
  }

  function link(href, label) {
    var a = el("a", "pill", label);
    a.href = href;
    a.rel = "noopener";
    return a;
  }

  function card(ev, base, resBase) {
    var c = el("article", "event");
    c.appendChild(el("div", "event-date", fmt(ev)));
    var body = el("div", "event-body");
    body.appendChild(el("h3", null, ev.event));
    if (ev.title) body.appendChild(el("p", "event-title", ev.title));
    var meta = [ev.role ? tr("role." + ev.role, ev.role) : "", ev.with && ev.with.length ? tr("ev.with", "with") + " " + ev.with.join(", ") : "", ev.mode === "online" ? tr("ev.online", "Online") : [ev.venue, (ev.venue && ev.city && ev.venue.indexOf(ev.city) !== -1) ? "" : ev.city, ev.country].filter(Boolean).join(", ")]
      .filter(Boolean).join(" · ");
    body.appendChild(el("p", "event-meta", meta));
    var links = ev.links || {};
    var row = el("div", "event-links");
    if (links.event) row.appendChild(link(links.event, tr("ev.page", "Event page")));
    if (links.slides) row.appendChild(link(/^https?:/.test(links.slides) ? links.slides : base + links.slides, tr("ev.slides", "Slides")));
    if (links.resources) row.appendChild(link(/^https?:/.test(links.resources) ? links.resources : resBase + links.resources, tr("ev.resources", "Resources")));
    if (links.recording) row.appendChild(link(links.recording, tr("ev.recording", "Recording")));
    if (row.children.length) body.appendChild(row);
    c.appendChild(body);
    return c;
  }

  // One tab per year, newest on the left. Keyboard: arrows, Home, End.
  function renderTabs(past, base, resBase) {
    var byYear = {};
    past.forEach(function (e) {
      var y = parse(e.date).getUTCFullYear();
      (byYear[y] = byYear[y] || []).push(e);
    });
    var years = Object.keys(byYear).map(Number).sort(function (a, b) { return b - a; });
    if (!years.length) return;

    var tablist = el("div", "tabs");
    tablist.setAttribute("role", "tablist");
    tablist.setAttribute("aria-label", tr("ev.tabs", "Past events by year"));
    pastEl.appendChild(tablist);

    var tabs = [], panels = [];
    years.forEach(function (y) {
      var tab = el("button", "tab");
      tab.type = "button";
      tab.id = "tab-" + y;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "panel-" + y);
      tab.appendChild(document.createTextNode(String(y)));
      tab.appendChild(el("span", "tab-count", String(byYear[y].length)));
      tablist.appendChild(tab);

      var panel = el("div", "tabpanel");
      panel.id = "panel-" + y;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
      panel.tabIndex = 0;
      byYear[y].forEach(function (e) { panel.appendChild(card(e, base, resBase)); });
      pastEl.appendChild(panel);

      tabs.push(tab);
      panels.push(panel);
    });

    function select(i, focus) {
      tabs.forEach(function (t, j) {
        var on = j === i;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        panels[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
      try { history.replaceState(null, "", "#year-" + years[i]); } catch (err) { /* ignore */ }
    }

    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i, false); });
      t.addEventListener("keydown", function (ev) {
        var n = tabs.length, next = null;
        if (ev.key === "ArrowRight") next = (i + 1) % n;
        else if (ev.key === "ArrowLeft") next = (i - 1 + n) % n;
        else if (ev.key === "Home") next = 0;
        else if (ev.key === "End") next = n - 1;
        if (next !== null) { ev.preventDefault(); select(next, true); }
      });
    });

    // Open the year in the URL (#year-2025) if present, otherwise the newest year.
    var m = /^#year-(\d{4})$/.exec(location.hash);
    var start = m ? years.indexOf(Number(m[1])) : 0;
    select(start < 0 ? 0 : start, false);
    if (m && start >= 0 && !scrolledToTabs) { scrolledToTabs = true; tablist.scrollIntoView({ block: "start" }); }
  }

  function render(data) {
    lastData = data;
    failed = false;
    draw();
  }

  function draw() {
    var data = lastData;
    var keepY = drawn ? window.scrollY : null;
    upcomingEl.textContent = "";
    if (pastEl) pastEl.textContent = "";
    var base = data.slides_base || "";
    var resBase = data.resources_base || "";
    var today = new Date();
    today = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    var evs = (data.events || []).slice();
    // "past": true in events.json moves an event to Past before its date has rolled over.
    function isPast(e) { return !!e.past || parse(e.end_date || e.date) < today; }
    var upcoming = evs.filter(function (e) { return !isPast(e); })
      .sort(function (a, b) { return parse(a.date) - parse(b.date); });
    var past = evs.filter(isPast)
      .sort(function (a, b) { return parse(b.date) - parse(a.date); });

    if (upcoming.length) {
      upcoming.forEach(function (e) { upcomingEl.appendChild(card(e, base, resBase)); });
    } else {
      upcomingEl.appendChild(el("p", "empty", tr("ev.empty", "No events announced right now. Want me at yours? Get in touch below.")));
    }

    if (pastEl) renderTabs(past, base, resBase);

    if (statsEl) {
      var cities = {};
      evs.forEach(function (e) { if (e.city && e.mode !== "online") cities[e.city] = 1; });
      var slides = evs.filter(function (e) { return e.links && e.links.slides; }).length;
      statsEl.textContent = tr("ev.stats", "{events} events · {cities} cities · {decks} decks to download")
        .replace("{events}", evs.length).replace("{cities}", Object.keys(cities).length).replace("{decks}", slides);
    }

    if (keepY !== null) window.scrollTo(0, keepY);
    drawn = true;
  }

  function fail() {
    failed = true;
    upcomingEl.textContent = "";
    upcomingEl.appendChild(el("p", "empty", tr("ev.fail", "The events list could not be loaded. You can browse everything in the talks repository on GitHub.")));
  }

  if (window.i18n) {
    window.i18n.onChange(function () {
      if (lastData) draw();
      else if (failed) fail();
    });
  }

  function load(url) {
    fetch(url, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(render)
      .catch(fail);
  }

  load(isLocal ? LOCAL : REMOTE);
})();
