# Mimi

Put together an outfit from top-of-the-shelf brands, top to bottom: headwear, outerwear, top, bottoms and footwear.

Every part is its own white row. Scroll a row sideways to pick a piece. The piece in the centre is your choice. The page shows nothing else except the name of each part.

## Run

It's a static site with no build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## How it works

- `js/catalog.js`: the curated pieces (brand, name, photo, shop link, plus a shape and colour for the fallback drawing) and the recommended looks. On a first visit one look is picked at random.
- `js/garments.js`: inline SVG drawings for each garment shape, tinted by colour. The app needs no image files.
- `js/app.js`: side-scrolling rows that snap to the centre. A mouse wheel, the arrow keys or a tap on a piece all change the choice. Double-tap (or double-click) a piece to open it in the shop it comes from.
- The chosen outfit is saved in the URL hash (for example `#0.4.1.2.4`), so you can reload or share it.

To add a piece, add an entry to a part's `items` in `js/catalog.js`.
