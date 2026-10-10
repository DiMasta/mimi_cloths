(function () {
  var parts = Catalog.parts;
  var root = document.getElementById("outfit");
  var rows = [];
  var DOUBLE_TAP_MS = 350;

  // The chosen outfit lives in the URL hash (e.g. #0.4.1.2.4) so a look
  // survives reloads and can be shared.
  function initialSelection() {
    var fromHash = location.hash.slice(1).split(".").map(Number);
    var valid =
      fromHash.length === parts.length &&
      fromHash.every(function (n, i) {
        return Number.isInteger(n) && n >= 0 && n < parts[i].items.length;
      });
    if (valid) return fromHash;
    return Catalog.looks[Math.floor(Math.random() * Catalog.looks.length)].slice();
  }

  function saveSelection() {
    var hash = "#" + rows.map(function (r) { return r.selected; }).join(".");
    if (location.hash !== hash) history.replaceState(null, "", hash);
  }

  function buildRow(part, selected) {
    var section = document.createElement("section");
    section.className = "part";
    section.style.setProperty("--grow", part.grow);

    var label = document.createElement("h2");
    label.className = "part-name";
    label.textContent = part.name;

    var track = document.createElement("div");
    track.className = "track";
    track.tabIndex = 0;
    track.setAttribute("aria-label", part.name);

    var vb = Garments.viewBoxes[part.id].split(" ");
    var drawingAspect = vb[2] + " / " + vb[3];
    var items = part.items.map(function (item, i) {
      var el = document.createElement("div");
      el.className = "item";
      el.title = item.brand + " — " + item.name;
      el.setAttribute("role", "img");
      el.setAttribute("aria-label", item.brand + " " + item.name);
      if (item.image) {
        el.style.setProperty("--ar", part.photoAspect || "4 / 5");
        el.appendChild(photo(item, function () {
          // Photo failed to load: fall back to the drawing.
          el.style.setProperty("--ar", drawingAspect);
          el.innerHTML = Garments.render(item);
          layoutRow(row);
        }));
      } else {
        el.style.setProperty("--ar", drawingAspect);
        el.innerHTML = Garments.render(item);
      }
      // Tap a piece to bring it to the centre; double-tap (or double-click)
      // it to open it in the shop. Double taps are detected by hand because
      // mobile browsers don't reliably fire dblclick.
      var lastTap = 0;
      el.addEventListener("click", function () {
        var now = Date.now();
        if (now - lastTap < DOUBLE_TAP_MS && item.url) {
          lastTap = 0;
          window.open(item.url, "_blank", "noopener");
          return;
        }
        lastTap = now;
        scrollToItem(row, i, true);
      });
      track.appendChild(el);
      return el;
    });

    section.appendChild(label);
    section.appendChild(track);
    root.appendChild(section);

    var row = { track: track, items: items, selected: selected, wheel: 0, lockUntil: 0 };
    bindRow(row);
    return row;
  }

  function photo(item, onError) {
    var img = document.createElement("img");
    img.src = item.image;
    img.alt = "";
    img.decoding = "async";
    img.draggable = false;
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", onError, { once: true });
    return img;
  }

  // Pad both ends so the first and last pieces can sit dead centre.
  function layoutRow(row) {
    var pad = Math.max(0, (row.track.clientWidth - row.items[0].offsetWidth) / 2);
    row.track.style.paddingInline = pad + "px";
    scrollToItem(row, row.selected, false);
  }

  function scrollToItem(row, index, smooth) {
    var el = row.items[index];
    var left = el.offsetLeft + el.offsetWidth / 2 - row.track.clientWidth / 2;
    row.track.scrollTo({ left: left, behavior: smooth ? "smooth" : "instant" });
    if (!smooth) markSelected(row, index);
  }

  function nearestIndex(row) {
    var center = row.track.scrollLeft + row.track.clientWidth / 2;
    var best = 0, bestDist = Infinity;
    row.items.forEach(function (el, i) {
      var d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  function markSelected(row, index) {
    row.items.forEach(function (el, i) {
      el.classList.toggle("is-selected", i === index);
    });
    if (row.selected !== index) {
      row.selected = index;
      saveSelection();
    }
  }

  function bindRow(row) {
    var ticking = false;
    row.track.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        markSelected(row, nearestIndex(row));
      });
    }, { passive: true });

    // A vertical mouse wheel steps through the row one piece at a time.
    row.track.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // trackpad swipe: native
      e.preventDefault();
      var now = Date.now();
      if (now < row.lockUntil) return;
      row.wheel += e.deltaY;
      if (Math.abs(row.wheel) < 30) return;
      var step = row.wheel > 0 ? 1 : -1;
      row.wheel = 0;
      row.lockUntil = now + 380;
      var next = Math.min(row.items.length - 1, Math.max(0, row.selected + step));
      scrollToItem(row, next, true);
    }, { passive: false });

    row.track.addEventListener("keydown", function (e) {
      var step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      var next = Math.min(row.items.length - 1, Math.max(0, row.selected + step));
      scrollToItem(row, next, true);
    });
  }

  var selection = initialSelection();
  rows = parts.map(function (part, i) { return buildRow(part, selection[i]); });

  function layoutAll() { rows.forEach(layoutRow); }
  layoutAll();
  saveSelection();

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutAll, 120);
  });
})();
