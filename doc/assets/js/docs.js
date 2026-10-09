// The Things Network docs theme — progressive enhancement only: every page is fully usable without
// this script (navigation is plain links, dropdowns are <details>, the sidebar starts open).
(function () {
  "use strict";

  var script = document.currentScript;
  var header = document.querySelector("[data-header]");

  // ---- Mobile header menu ----
  var toggle = document.querySelector("[data-header-toggle]");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = !header.hasAttribute("data-open");
      header.toggleAttribute("data-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // ---- Dropdowns: close on outside click / Escape, one open at a time ----
  var drops = Array.prototype.slice.call(document.querySelectorAll(".dx-drop"));
  function closeDrops(except) {
    drops.forEach(function (d) { if (d !== except) d.removeAttribute("open"); });
  }
  drops.forEach(function (d) {
    d.addEventListener("toggle", function () { if (d.open) closeDrops(d); });
  });
  document.addEventListener("pointerdown", function (e) {
    drops.forEach(function (d) { if (d.open && !d.contains(e.target)) d.removeAttribute("open"); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrops(null);
  });

  // ---- Sidebar: collapsed by default on narrow screens ----
  var side = document.querySelector("[data-side]");
  if (side) {
    var narrow = window.matchMedia("(max-width: 1080px)");
    var syncSide = function () { side.open = !narrow.matches; };
    syncSide();
    if (narrow.addEventListener) narrow.addEventListener("change", syncSide);
  }

  // ---- Signed-in state (same-origin session API of www.thethingsnetwork.org; absent elsewhere) ----
  var auth = document.querySelector("[data-auth]");
  if (auth && /(^|\.)thethingsnetwork\.org$/.test(location.hostname) && window.fetch) {
    fetch("/api/session", { credentials: "same-origin" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        var u = d && d.user && d.user.username;
        if (!u) return;
        var a = document.createElement("a");
        a.className = "dx-header__user";
        a.href = "/u/" + encodeURIComponent(u);
        var img = document.createElement("img");
        img.src = "https://id.thethingsnetwork.org/pictures/" + encodeURIComponent(u) + "/thumbnail";
        img.alt = "";
        img.width = 28;
        img.height = 28;
        a.appendChild(img);
        a.appendChild(document.createTextNode(u));
        auth.replaceChildren(a);
      })
      .catch(function () {});
  }

  // ---- "On this page": highlight the section being read ----
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll("[data-toc] a"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var targets = tocLinks
      .map(function (a) { return document.getElementById(decodeURIComponent(a.hash.slice(1))); })
      .filter(Boolean);
    var current = null;
    var setCurrent = function (id) {
      if (id === current) return;
      current = id;
      tocLinks.forEach(function (a) {
        if (decodeURIComponent(a.hash.slice(1)) === id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };
    var update = function () {
      var line = 120;
      var active = targets[0];
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].getBoundingClientRect().top - line <= 0) active = targets[i];
        else break;
      }
      if (active) setCurrent(active.id);
    };
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    update();
  }

  // ---- Search (client-side over the Hugo-generated index.json) ----
  var box = document.querySelector("[data-search]");
  var input = box && box.querySelector("[data-search-input]");
  var results = box && box.querySelector("[data-search-results]");
  var indexUrl = script && script.getAttribute("data-search-index");
  if (!box || !input || !results || !indexUrl || !window.fetch) return;

  var index = null;
  var loading = null;
  var selected = -1;
  var shown = [];

  function load() {
    if (!loading) {
      loading = fetch(indexUrl)
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { index = d; })
        .catch(function () { index = []; loading = null; });
    }
    return loading;
  }

  function norm(s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function mark(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return out;
  }

  function search(q) {
    var terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var scored = [];
    for (var i = 0; i < index.length; i++) {
      var p = index[i];
      var t = norm(p.t), d = norm(p.d), s = norm(p.s);
      var score = 0, ok = true;
      for (var j = 0; j < terms.length; j++) {
        var term = terms[j];
        if (t.indexOf(term) === 0) score += 12;
        else if (t.indexOf(term) !== -1) score += 8;
        else if (s.indexOf(term) !== -1) score += 3;
        else if (d.indexOf(term) !== -1) score += 2;
        else { ok = false; break; }
      }
      if (ok) scored.push({ p: p, score: score });
    }
    scored.sort(function (a, b) { return b.score - a.score || a.p.t.length - b.p.t.length; });
    return scored.slice(0, 8).map(function (x) { return x.p; });
  }

  function render() {
    var q = input.value.trim();
    if (!q) { close(); return; }
    shown = index ? search(q) : [];
    selected = shown.length ? 0 : -1;
    var terms = norm(q).split(/\s+/).filter(Boolean);
    if (!index) {
      results.innerHTML = '<div class="dx-search__empty">Loading…</div>';
    } else if (!shown.length) {
      results.innerHTML = '<div class="dx-search__empty">No pages match “' + esc(q) + '”.</div>';
    } else {
      results.innerHTML = shown.map(function (p, i) {
        return '<a class="dx-search__item" role="option" id="dx-sr-' + i + '" href="' + esc(p.u) + '"' + (i === selected ? ' aria-selected="true"' : "") + ">" +
          '<span class="dx-search__title">' + mark(p.t, terms) + "</span>" +
          '<span class="dx-search__meta">' + esc(p.s) + (p.d ? " · " + esc(p.d) : "") + "</span></a>";
      }).join("");
    }
    results.hidden = false;
    input.setAttribute("aria-expanded", "true");
    input.setAttribute("aria-activedescendant", selected >= 0 ? "dx-sr-" + selected : "");
  }

  function close() {
    results.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  }

  function move(delta) {
    if (!shown.length) return;
    selected = (selected + delta + shown.length) % shown.length;
    var items = results.querySelectorAll(".dx-search__item");
    for (var i = 0; i < items.length; i++) items[i].toggleAttribute("aria-selected", i === selected);
    if (items[selected]) items[selected].scrollIntoView({ block: "nearest" });
    input.setAttribute("aria-activedescendant", "dx-sr-" + selected);
  }

  input.addEventListener("focus", load);
  input.addEventListener("input", function () { load().then(render); render(); });
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
    else if (e.key === "Enter" && shown[selected]) { e.preventDefault(); location.href = shown[selected].u; }
    else if (e.key === "Escape") { input.value = ""; close(); input.blur(); }
  });
  document.addEventListener("pointerdown", function (e) { if (!box.contains(e.target)) close(); });

  // "/" focuses search (unless already typing somewhere).
  document.addEventListener("keydown", function (e) {
    if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
    var el = document.activeElement;
    if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
    e.preventDefault();
    if (header && getComputedStyle(toggle).display !== "none" && !header.hasAttribute("data-open")) toggle.click();
    input.focus();
  });
})();
