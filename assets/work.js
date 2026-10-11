(function () {
  var groups = document.querySelectorAll(".work-group");
  var links = document.querySelectorAll(".work-group-nav a");
  if (!groups.length || !links.length) return;

  function show(id) {
    var matched = false;
    for (var i = 0; i < groups.length; i++) {
      var on = groups[i].id === id;
      if (on) matched = true;
      groups[i].hidden = !on;
    }
    if (!matched) return false;
    for (var j = 0; j < links.length; j++) {
      if (links[j].getAttribute("data-work-group") === id) {
        links[j].setAttribute("aria-current", "true");
      } else {
        links[j].removeAttribute("aria-current");
      }
    }
    return true;
  }

  function idFromHash() {
    return location.hash.replace(/^#/, "");
  }

  function sync() {
    if (!show(idFromHash())) show("uber");
  }

  window.addEventListener("hashchange", sync);
  sync();
})();
