// Flat illustrations for every garment type, drawn as inline SVG so the
// whole app works offline with no image assets.
(function () {
  var uid = 0;

  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  // Mix a colour toward black (amount < 0) or white (amount > 0).
  function shade(hex, amount) {
    var target = amount < 0 ? 0 : 255;
    var t = Math.abs(amount);
    return (
      "#" +
      hexToRgb(hex)
        .map(function (c) {
          var v = Math.round(c + (target - c) * t);
          return ("0" + v.toString(16)).slice(-2);
        })
        .join("")
    );
  }

  function line(c) {
    return shade(c, -0.28);
  }

  function svg(viewBox, body) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + viewBox + '" ' +
      'stroke-linejoin="round" stroke-linecap="round" aria-hidden="true" focusable="false">' +
      body +
      "</svg>"
    );
  }

  function path(d, fill, stroke, extra) {
    return (
      '<path d="' + d + '" fill="' + (fill || "none") + '" stroke="' +
      (stroke || "none") + '" stroke-width="2"' + (extra ? " " + extra : "") + "/>"
    );
  }

  // Horizontal or vertical stripes clipped to a shape (ribbing, quilting).
  function clipped(shapeD, lines) {
    var id = "clip" + ++uid;
    return (
      '<clipPath id="' + id + '"><path d="' + shapeD + '"/></clipPath>' +
      '<g clip-path="url(#' + id + ')">' + lines + "</g>"
    );
  }

  function ribs(x1, x2, y1, y2, step, stroke) {
    var out = "";
    for (var x = x1; x <= x2; x += step) {
      out += path("M" + x + " " + y1 + " L" + x + " " + y2, null, stroke, 'stroke-width="1" opacity="0.45"');
    }
    return out;
  }

  /* ---------- Headwear: viewBox 0 0 200 120 ---------- */

  var HEAD = "0 0 200 120";

  function cap(c) {
    var s = line(c);
    return svg(HEAD,
      path("M150 86 Q188 82 196 96 Q174 108 138 100 Z", shade(c, -0.1), s) +
      path("M38 94 Q36 34 100 30 Q162 32 164 94 Z", c, s) +
      path("M100 30 Q90 62 96 94", null, s, 'opacity="0.6"') +
      path("M100 30 Q128 58 134 94", null, s, 'opacity="0.6"') +
      path("M38 94 L164 94", null, s) +
      '<circle cx="100" cy="30" r="4" fill="' + shade(c, -0.12) + '" stroke="' + s + '" stroke-width="2"/>'
    );
  }

  function beanie(c) {
    var s = line(c);
    var dome = "M46 92 Q44 20 100 18 Q156 20 154 92 Z";
    var cuff = "M40 80 Q40 72 48 72 L152 72 Q160 72 160 80 L160 94 Q160 102 152 102 L48 102 Q40 102 40 94 Z";
    return svg(HEAD,
      path(dome, c, s) +
      clipped(dome, ribs(52, 150, 10, 100, 9, s)) +
      path(cuff, shade(c, -0.06), s) +
      clipped(cuff, ribs(46, 156, 70, 104, 6, s))
    );
  }

  function bucket(c) {
    var s = line(c);
    return svg(HEAD,
      path("M24 100 Q38 70 62 70 L138 70 Q162 70 176 100 Q100 112 24 100 Z", shade(c, -0.05), s) +
      path("M34 97 Q100 106 166 97", null, s, 'stroke-width="1" stroke-dasharray="3 3" opacity="0.7"') +
      path("M62 74 Q62 24 100 22 Q138 24 138 74 Z", c, s) +
      path("M61 74 L139 74 L139.6 64 L60.4 64 Z", shade(c, -0.18), s)
    );
  }

  function fedora(c) {
    var s = line(c);
    return svg(HEAD,
      '<ellipse cx="100" cy="86" rx="90" ry="15" fill="' + shade(c, -0.08) + '" stroke="' + s + '" stroke-width="2"/>' +
      path("M56 86 Q52 40 66 28 Q84 20 100 34 Q116 20 134 28 Q148 40 144 86 Z", c, s) +
      path("M100 34 Q98 50 100 66", null, s, 'opacity="0.5"') +
      path("M55 86 L145 86 L144.2 72 L55.8 72 Z", shade(c, -0.45), s) +
      path("M10 86 A90 15 0 0 0 190 86 L145 86 L55 86 Z", shade(c, -0.08), s)
    );
  }

  /* ---------- Tops & outerwear: viewBox 0 0 200 220 ---------- */

  var BODY = "0 0 200 220";

  function longSleeve(b, sl) {
    return (
      "M78 26 L52 34 Q40 38 36 52 L22 " + sl + " L42 " + (sl + 4) + " L56 84 L58 " + b +
      " L142 " + b + " L144 84 L158 " + (sl + 4) + " L178 " + sl +
      " L164 52 Q160 38 148 34 L122 26 Q100 40 78 26 Z"
    );
  }

  function shortSleeve(b) {
    return (
      "M78 26 L52 34 Q40 38 34 54 L24 86 L48 96 L58 76 L58 " + b + " L142 " + b +
      " L142 76 L152 96 L176 86 L166 54 Q160 38 148 34 L122 26 Q100 40 78 26 Z"
    );
  }

  function cuffs(sl, c, s) {
    return (
      path("M23 " + (sl - 12) + " L43 " + (sl - 8) + " L42 " + (sl + 4) + " L22 " + sl + " Z", shade(c, -0.06), s) +
      path("M177 " + (sl - 12) + " L157 " + (sl - 8) + " L158 " + (sl + 4) + " L178 " + sl + " Z", shade(c, -0.06), s)
    );
  }

  function buttons(x, ys, c) {
    return ys
      .map(function (y) {
        return '<circle cx="' + x + '" cy="' + y + '" r="2.6" fill="' + shade(c, -0.35) + '"/>';
      })
      .join("");
  }

  function tee(c) {
    var s = line(c);
    return svg(BODY,
      path(shortSleeve(196), c, s) +
      path("M78 26 Q100 44 122 26", null, shade(c, -0.12), 'stroke-width="5"') +
      path("M30 72 L52 82 M170 72 L148 82", null, s, 'stroke-width="1" opacity="0.5"')
    );
  }

  function polo(c) {
    var s = line(c);
    return svg(BODY,
      path(shortSleeve(196), c, s) +
      path("M92 34 L108 34 L108 70 L92 70 Z", shade(c, -0.06), s) +
      buttons(100, [46, 60], c) +
      path("M78 24 L100 36 L88 48 L70 34 Z", shade(c, -0.05), s) +
      path("M122 24 L100 36 L112 48 L130 34 Z", shade(c, -0.05), s)
    );
  }

  function shirt(c) {
    var s = line(c);
    var b = 198, sl = 178;
    return svg(BODY,
      path(longSleeve(b, sl), c, s) +
      cuffs(sl, c, s) +
      path("M100 44 L100 " + b, null, s, 'opacity="0.7"') +
      buttons(104, [62, 92, 122, 152, 182], c) +
      path("M80 20 L100 44 L74 42 Z", shade(c, -0.05), s) +
      path("M120 20 L100 44 L126 42 Z", shade(c, -0.05), s) +
      path("M66 70 L84 70 L84 88 L66 88 Z", null, s, 'stroke-width="1" opacity="0.55"')
    );
  }

  function sweater(c) {
    var s = line(c);
    var b = 194, sl = 178;
    var hem = "M58 " + (b - 16) + " L142 " + (b - 16) + " L142 " + b + " L58 " + b + " Z";
    return svg(BODY,
      path(longSleeve(b, sl), c, s) +
      cuffs(sl, c, s) +
      path(hem, shade(c, -0.06), s) +
      clipped(hem, ribs(62, 140, b - 18, b + 2, 5, s)) +
      path("M78 26 Q100 48 122 26", null, shade(c, -0.14), 'stroke-width="7"') +
      path("M76 25 Q100 50 124 25", null, s, 'stroke-width="1"')
    );
  }

  function coat(c, opts) {
    opts = opts || {};
    var s = line(c);
    var b = 214, sl = 184;
    var out =
      path(longSleeve(b, sl), c, s) +
      path("M100 104 L100 " + b, null, s) +
      path("M78 26 L66 54 L82 60 L100 104 Z", shade(c, -0.08), s) +
      path("M122 26 L134 54 L118 60 L100 104 Z", shade(c, -0.08), s) +
      path("M64 166 L86 164 M136 166 L114 164", null, s);
    if (opts.belt) {
      out +=
        path("M58 120 L142 120 L142 132 L58 132 Z", shade(c, -0.12), s) +
        path("M108 118 L122 118 L122 134 L108 134 Z", "none", shade(c, -0.5), 'stroke-width="2.5"') +
        path("M42 " + (sl - 14) + " L23 " + (sl - 18), null, s, 'stroke-width="5"') +
        path("M158 " + (sl - 14) + " L177 " + (sl - 18), null, s, 'stroke-width="5"') +
        buttons(90, [112, 146, 160], c) + buttons(110, [112, 146, 160], c);
    } else {
      out += buttons(90, [124, 150], c) + buttons(110, [124, 150], c);
    }
    return svg(BODY, out);
  }

  function trench(c) {
    return coat(c, { belt: true });
  }

  function bomber(c) {
    var s = line(c);
    var b = 170, sl = 162;
    var hem = "M58 " + (b - 14) + " L142 " + (b - 14) + " L142 " + b + " L58 " + b + " Z";
    return svg(BODY,
      path(longSleeve(b, sl), c, s) +
      cuffs(sl, c, s) +
      path(hem, shade(c, -0.1), s) +
      clipped(hem, ribs(62, 140, b - 16, b + 2, 5, s)) +
      path("M78 26 Q100 46 122 26", null, shade(c, -0.12), 'stroke-width="7"') +
      path("M100 40 L100 " + b, null, shade(c, -0.5), 'stroke-width="2"') +
      path("M70 110 L80 132 M130 110 L120 132", null, s) +
      path("M42 64 L62 64", null, shade(c, 0.25), 'stroke-width="1.5" opacity="0.6"')
    );
  }

  function puffer(c) {
    var s = line(c);
    var b = 182, sl = 172;
    var shape = longSleeve(b, sl);
    var quilts = "";
    for (var y = 56; y < b; y += 26) {
      quilts += path("M0 " + y + " Q100 " + (y + 6) + " 200 " + y, null, s, 'opacity="0.7"');
    }
    return svg(BODY,
      path(shape, c, s) +
      clipped(shape, quilts) +
      path("M76 12 Q100 8 124 12 L124 34 Q100 40 76 34 Z", shade(c, -0.06), s) +
      path("M100 10 L100 " + b, null, shade(c, -0.45), 'stroke-width="2"')
    );
  }

  /* ---------- Bottoms: viewBox 0 0 200 240 ---------- */

  var LEGS = "0 0 200 240";

  function waistband(x1, x2, c, s) {
    return path("M" + x1 + " 8 L" + x2 + " 8 L" + x2 + " 22 L" + x1 + " 22 Z", shade(c, -0.08), s);
  }

  function trousers(c) {
    var s = line(c);
    return svg(LEGS,
      path("M60 22 L140 22 L152 232 L110 232 L100 78 L90 232 L48 232 Z", c, s) +
      waistband(60, 140, c, s) +
      path("M74 30 L70 232 M126 30 L130 232", null, s, 'stroke-width="1" opacity="0.4"') +
      path("M100 22 L100 62", null, s, 'opacity="0.6"') +
      path("M62 30 Q74 34 78 50 M138 30 Q126 34 122 50", null, s, 'opacity="0.6"')
    );
  }

  function wideLeg(c) {
    var s = line(c);
    return svg(LEGS,
      path("M60 22 L140 22 L170 232 L108 232 L100 86 L92 232 L30 232 Z", c, s) +
      waistband(60, 140, c, s) +
      path("M80 22 L66 232 M120 22 L134 232", null, s, 'stroke-width="1" opacity="0.4"') +
      path("M100 22 L100 66", null, s, 'opacity="0.6"')
    );
  }

  function jeans(c) {
    var s = line(c);
    var stitch = "#c99a4e";
    var dash = 'stroke-width="1.2" stroke-dasharray="3 2.5"';
    return svg(LEGS,
      path("M60 22 L140 22 L146 232 L108 232 L100 80 L92 232 L54 232 Z", c, s) +
      waistband(60, 140, c, s) +
      path("M64 23 Q78 30 82 46", null, stitch, dash) +
      path("M136 23 Q122 30 118 46", null, stitch, dash) +
      path("M100 22 Q102 54 94 68", null, stitch, dash) +
      path("M57 222 L91 222 M109 222 L145 222", null, stitch, dash) +
      path("M70 6 L70 24 M130 6 L130 24 M100 6 L100 24", null, shade(c, -0.3), 'stroke-width="3"') +
      '<circle cx="100" cy="15" r="3" fill="' + stitch + '"/>'
    );
  }

  function shorts(c) {
    var s = line(c);
    return svg(LEGS,
      path("M58 22 L142 22 L156 128 L106 128 L100 76 L94 128 L44 128 Z", c, s) +
      waistband(58, 142, c, s) +
      path("M100 22 L100 58", null, s, 'opacity="0.6"') +
      path("M62 30 Q74 34 78 50 M138 30 Q126 34 122 50", null, s, 'opacity="0.6"') +
      path("M46 118 L94 118 M106 118 L154 118", null, s, 'stroke-width="1" opacity="0.5"')
    );
  }

  function skirt(c) {
    var s = line(c);
    var pleats = "";
    for (var i = 1; i < 8; i++) {
      pleats += path(
        "M" + (66 + (i * 68) / 8) + " 22 L" + (30 + (i * 140) / 8) + " 176",
        null, s, 'stroke-width="1" opacity="0.55"'
      );
    }
    return svg(LEGS,
      path("M66 22 L134 22 L170 176 L30 176 Z", c, s) + pleats + waistband(66, 134, c, s)
    );
  }

  /* ---------- Footwear: viewBox 0 0 200 100 ---------- */

  var FEET = "0 0 200 100";

  function sneaker(c, accent) {
    var s = line(c);
    accent = accent || "#b8913c";
    var laces = "";
    for (var i = 0; i < 4; i++) {
      var x = 82 + i * 11, y = 40 + i * 4;
      laces += path("M" + (x - 3) + " " + (y - 4) + " L" + (x + 5) + " " + (y + 4), null, s, 'stroke-width="2.4"');
    }
    return svg(FEET,
      path("M18 70 Q14 44 34 40 L72 34 Q90 32 104 44 L146 58 Q186 60 186 70 Z", c, s) +
      path("M14 70 L190 70 Q193 82 182 84 L22 84 Q11 84 14 70 Z", shade(c, 0.4), s) +
      path("M18 76 L188 76", null, s, 'stroke-width="1" opacity="0.4"') +
      path("M74 36 Q86 56 112 60", null, s, 'opacity="0.5"') +
      laces +
      [26, 30, 34, 38].map(function (x) {
        return '<circle cx="' + x + '" cy="58" r="1.1" fill="' + accent + '"/>';
      }).join("")
    );
  }

  function loafer(c, accent) {
    var s = line(c);
    var out =
      path("M22 72 Q18 56 36 54 L68 52 Q84 50 98 56 L150 62 Q184 64 184 72 Z", c, s) +
      path("M18 72 L188 72 L186 80 L56 80 L54 86 L20 86 Z", shade(c, -0.35), s) +
      path("M104 58 Q120 68 152 64", null, s, 'stroke-width="1.2" stroke-dasharray="2.5 2" opacity="0.8"');
    if (accent) {
      out +=
        path("M108 62 L134 66", null, accent, 'stroke-width="3.2"') +
        '<circle cx="108" cy="62" r="3" fill="none" stroke="' + accent + '" stroke-width="2"/>' +
        '<circle cx="134" cy="66" r="3" fill="none" stroke="' + accent + '" stroke-width="2"/>';
    } else {
      out += path("M106 62 L132 65", null, shade(c, -0.25), 'stroke-width="4"');
    }
    return svg(FEET, out);
  }

  function derby(c) {
    var s = line(c);
    return svg(FEET,
      path("M22 72 Q16 42 40 38 Q70 36 92 46 L148 60 Q184 62 184 72 Z", c, s) +
      path("M18 72 L188 72 L186 80 L56 80 L54 86 L20 86 Z", shade(c, -0.4), s) +
      path("M60 40 Q74 58 70 72", null, s, 'opacity="0.7"') +
      path("M78 44 L96 52 M82 48 L100 56 M86 52 L104 60", null, shade(c, 0.35), 'stroke-width="1.8"') +
      path("M144 60 Q156 66 154 72", null, s, 'opacity="0.6"')
    );
  }

  function chelsea(c) {
    var s = line(c);
    return svg(FEET,
      path("M28 72 L30 8 L76 8 L78 50 L150 58 Q184 62 184 72 Z", c, s) +
      path("M44 10 L50 50 L66 50 L70 10 Z", shade(c, -0.22), s) +
      clipped("M44 10 L50 50 L66 50 L70 10 Z", ribs(44, 70, 8, 52, 4, shade(c, 0.2))) +
      path("M76 4 L84 4 L84 18 L76 18", null, s) +
      path("M24 72 L188 72 L186 80 L64 80 L62 88 L26 88 Z", shade(c, -0.3), s)
    );
  }

  window.Garments = {
    shapes: {
      cap: cap, beanie: beanie, bucket: bucket, fedora: fedora,
      tee: tee, polo: polo, shirt: shirt, sweater: sweater,
      coat: coat, trench: trench, bomber: bomber, puffer: puffer,
      trousers: trousers, wideLeg: wideLeg, jeans: jeans, shorts: shorts, skirt: skirt,
      sneaker: sneaker, loafer: loafer, derby: derby, chelsea: chelsea
    },
    viewBoxes: { headwear: HEAD, outerwear: BODY, top: BODY, bottoms: LEGS, footwear: FEET },
    render: function (item) {
      return this.shapes[item.shape](item.color, item.accent);
    }
  };
})();
