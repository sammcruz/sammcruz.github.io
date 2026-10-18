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
  function label() {
    if (btn) btn.textContent = current() === "dark" ? "Light mode" : "Dark mode";
  }

  var saved = stored();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  label();

  if (btn) {
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      label();
    });
  }
})();
