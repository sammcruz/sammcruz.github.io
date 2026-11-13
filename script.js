// Theme toggle: follows the OS by default, remembers an explicit choice.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-btn");

  function stored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem("theme", v); } catch (e) { /* private mode */ }
  }
  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function current() {
    return root.getAttribute("data-theme") || (systemDark() ? "dark" : "light");
  }
  function tr(key, fallback) {
    return window.i18n ? window.i18n.t(key, fallback) : fallback;
  }
  function label() {
    if (btn) btn.textContent = current() === "dark" ? tr("theme.light", "Light mode") : tr("theme.dark", "Dark mode");
  }

  var saved = stored();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  label();
  if (window.i18n) window.i18n.onChange(label);

  if (btn) {
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      label();
    });
  }
})();
