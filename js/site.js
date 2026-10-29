(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  var themeButton = document.getElementById("theme-toggle");
  var dialog = document.getElementById("cite");
  var citeText = document.getElementById("cite-text");
  var citeCopy = document.getElementById("cite-copy");
  var citeDownload = document.getElementById("cite-download");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var dark = !root.classList.contains("dark");
      root.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    });
  }

  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (item) {
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      document.querySelectorAll("[data-tags]").forEach(function (project) {
        var tags = project.getAttribute("data-tags").split(/\s+/);
        project.hidden = filter !== "all" && tags.indexOf(filter) === -1;
      });
    });
  });

  document.querySelectorAll("[data-cite]").forEach(function (button) {
    button.addEventListener("click", function () {
      var url = button.getAttribute("data-cite");
      citeDownload.href = url;
      citeText.textContent = "Loading…";
      dialog.showModal();
      fetch(url)
        .then(function (response) {
          if (!response.ok) throw new Error("missing");
          return response.text();
        })
        .then(function (text) {
          citeText.textContent = text.trim();
        })
        .catch(function () {
          citeText.textContent = "The citation file could not be loaded.";
        });
    });
  });

  if (dialog) {
    document.getElementById("cite-close").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    citeCopy.addEventListener("click", function () {
      var text = citeText.textContent;
      var done = function () {
        citeCopy.textContent = "Copied";
        setTimeout(function () { citeCopy.textContent = "Copy"; }, 1200);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(done);
      } else {
        done();
      }
    });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href*='#']"));
  var pairs = links.map(function (link) {
    return { link: link, section: document.querySelector(link.hash) };
  }).filter(function (pair) { return pair.section; });

  if (pairs.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.classList.remove("active"); link.removeAttribute("aria-current"); });
        var match = pairs.filter(function (pair) { return pair.section === entry.target; })[0];
        if (match) {
          match.link.classList.add("active");
          match.link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    pairs.forEach(function (pair) { observer.observe(pair.section); });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
