// Womenswear from top-of-the-shelf houses, ordered top to bottom.
// Photos and product links come from the brands' and retailers' public
// product feeds (The Row, Khaite, Toteme, Antonioli, Dover Street Market).
// If a photo fails to load, the piece is drawn from `shape` in garments.js,
// tinted by `color`.
window.Catalog = {
  parts: [
    {
      id: "headwear",
      name: "Headwear",
      grow: 0.7,
      photoAspect: "4 / 5",
      items: [
        { brand: "Khaite", name: "Vito Hat in Black", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/VITO-HAT_BLACK_10121-531-200_A_jpg.jpg?width=900", url: "https://khaite.com/products/vito-hat-in-black", shape: "bucket", color: "#1c1c1e" },
        { brand: "Moncler", name: "Wool Blend Beanie With Pom Pom", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/3B00041M4506999-BEANIES-MONCLER-Donna-20260923092039_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-moncler-accessories-hats-3b00041m4506-999", shape: "beanie", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Wool Knit Beanie in Black", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000123008_1500000122939_5903.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-lw-classic-wool-knit-beanie-1000-aw26-a0099wv72z0", shape: "beanie", color: "#1c1c1e" },
        { brand: "Toteme", name: "Lambswool beanie vintage blue", image: "https://cdn.shopify.com/s/files/1/0480/1141/1607/files/TOTEME_FLATS_FW26_HATS_FW26_264-WSH0053-YA0309-464_LAMBSWOOL_BEANIE_VINTAGE_BLUE_front_GB_197c1aed-83bb-4938-826c-77ed820d10e2.jpg?width=900", url: "https://toteme.com/products/lambswool-beanie-vintage-blue", shape: "beanie", color: "#4b6b90" },
        { brand: "Khaite", name: "Arlo Clochet Hat in Black", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/ARLO-CLOCHET-HAT_BLACK_10232-531-200_A.jpg?width=900", url: "https://khaite.com/products/arlo-clochet-hat-in-black", shape: "bucket", color: "#1c1c1e" },
        { brand: "Toteme", name: "Brushed cashmere beanie black", image: "https://cdn.shopify.com/s/files/1/0480/1141/1607/files/TOTEME_FLATS__PS26_GARDEROB_TRAVEL_HATS_261-WSH0048-YA0262_BRUSHED_CASHMERE_BEANIE_BLACK_front_GB.jpg?width=900", url: "https://toteme.com/products/brushed-cashmere-beanie-black", shape: "beanie", color: "#1c1c1e" }
      ]
    },
    {
      id: "outerwear",
      name: "Outerwear",
      grow: 1.15,
      photoAspect: "4 / 5",
      items: [
        { brand: "The Row", name: "Quintus Jacket", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/files/10508W1439BLKF.jpg?width=900", url: "https://www.therow.com/products/quintus-jacket-black-1", shape: "coat", color: "#8d8d90" },
        { brand: "Khaite", name: "Manston Coat in Black", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/MANSTON-COAT_BLACK_6163547-200_GHOST.jpg?width=900", url: "https://khaite.com/products/manston-coat-in-black", shape: "coat", color: "#1c1c1e" },
        { brand: "Prada", name: "Double-Breasted Gingham Check Wool Coat", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/P664TG17YSF0967-LONGCOATS-PRADA-Donna-20261009113509_0-L.jpg?width=900", url: "https://www.antonioli.eu/products/woman-prada-clothing-coats-p664tg17ys-f0967", shape: "coat", color: "#8d8d90" },
        { brand: "Prada", name: "Single-Breasted Gabardine Jacket in Black", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/PRADA_11000000397810_7100.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/prada-womens-jacket-f0002-aw26-p515q", shape: "coat", color: "#1c1c1e" },
        { brand: "The Row", name: "Ale Jacket", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/files/R000444W4675BLKF.jpg?width=900", url: "https://www.therow.com/products/ale-jacket-black", shape: "coat", color: "#8d8d90" },
        { brand: "Khaite", name: "Rolo Jacket in Black Flower Embroidery", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/ROLO-JACKET_BLACK_62481036-200_GHOST.jpg?width=900", url: "https://khaite.com/products/rolo-jacket-in-black-flower-embroidery", shape: "coat", color: "#1c1c1e" },
        { brand: "Max Mara", name: "Cape in Alpaca Wool Teddy", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/2624736172600014-CAPES-MAXMARA-Donna-20261009113445_0.jpg?width=900", url: "https://www.antonioli.eu/products/woman-max-mara-clothing-coats-2624736172600-014", shape: "coat", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Spotted Curly Shearling Coat in Himalaya", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000118063_6046.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-spotted-shearling-short-coat-2112-aw26-873866v6n60", shape: "coat", color: "#8d8d90" },
        { brand: "Burberry", name: "Cropped Quilted Nylon Floriston Jacket", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/8135130C1172-PADDEDJACKETS-BURBERRY-Donna-20261009113454_0.jpg?width=900", url: "https://www.antonioli.eu/products/woman-burberry-clothing-jackets-8135130-c1172", shape: "coat", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Satin Nylon Blouson in Tarragon", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000122983_6041.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-satin-nylon-wr-blouson-3167-aw26-a000zav6c50", shape: "coat", color: "#8d8d90" }
      ]
    },
    {
      id: "top",
      name: "Top",
      grow: 1.05,
      photoAspect: "4 / 5",
      items: [
        { brand: "The Row", name: "Ophelia Sweater", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/files/325Y184SANF.jpg?width=900", url: "https://www.therow.com/products/ophelia-top-sand-1", shape: "sweater", color: "#8d8d90" },
        { brand: "Khaite", name: "Marcela Embroidery Cardigan in Primary Multi", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/MARCELA-EMBROIDERY-CARDIGAN_PRIMARY-MULTI_18399552-786_GHOST.jpg?width=900", url: "https://khaite.com/products/marcela-embroidery-cardigan-in-primary-multi", shape: "sweater", color: "#8d8d90" },
        { brand: "Chloé", name: "High-Neck Ruffled Blouse", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/CH26WH128066025-BLOUSES-CHLO-Donna-20261009113452_0.jpg?width=900", url: "https://www.antonioli.eu/products/woman-chloe-clothing-shirts-ch26wh128066-025", shape: "shirt", color: "#8d8d90" },
        { brand: "Prada", name: "Poplin Shirt in Begonia Pink", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/PRADA_11000000397805_7112.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/prada-womens-shirt-with-thread-embroidery-a-f0638-aw26-p482jr", shape: "shirt", color: "#e3b2bb" },
        { brand: "The Row", name: "Stepny Turtleneck", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/files/5583Y184DRNF.jpg?width=900", url: "https://www.therow.com/products/stepny-top-blue", shape: "sweater", color: "#8d8d90" },
        { brand: "Khaite", name: "Ivy Top in Beige", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/IVY-TOP_BEIGE_24823440-963_GHOST.jpg?width=900", url: "https://khaite.com/products/ivy-top-in-beige", shape: "sweater", color: "#d9c8a9" },
        { brand: "Max Mara", name: "Wool Cashmere Mock Neck Sweater", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/2626366062600010-TURTLENECK-MAXMARA-Donna-20261009113447_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-max-mara-clothing-knitwear-2626366062600-010", shape: "sweater", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Viscose Twill Blouse in Prosecco", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000118036_6120.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-shirt-silk-twill-1326-aw26-868999v6m80", shape: "shirt", color: "#8d8d90" },
        { brand: "Miu Miu", name: "Silk Sweater", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/MML06T191XF0009-CREWNECK-MIUMIU-Donna-20260612162544_0.jpg?width=900", url: "https://www.antonioli.eu/products/woman-miu-miu-clothing-knitwear-mml06t191x-f0009", shape: "sweater", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Cotton Poplin Shirt in Prosecco/Brown/White", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000118018_24609.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-striped-cotton-poplin-ss-shirt-2123-aw26-869829v6s90", shape: "shirt", color: "#f4f2ec" }
      ]
    },
    {
      id: "bottoms",
      name: "Bottoms",
      grow: 1.2,
      photoAspect: "4 / 5",
      items: [
        { brand: "The Row", name: "Gala Pant", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/products/1766W1968NVYF.jpg?width=900", url: "https://www.therow.com/products/gala-pant-blue", shape: "wideLeg", color: "#8d8d90" },
        { brand: "Khaite", name: "Clover Pant in Dark Brown", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/CLOVER-PANT_DARK-BROWN_3176547-205_GHOST.jpg?width=900", url: "https://khaite.com/products/clover-pant-in-dark-brown", shape: "wideLeg", color: "#5b3f2c" },
        { brand: "Prada", name: "Satin Skirt", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/P10D61653F0002-MIDI-PRADA-Donna-20261009113507_0.jpg?width=900", url: "https://www.antonioli.eu/products/woman-prada-clothing-skirts-p10d61653-f0002", shape: "skirt", color: "#8d8d90" },
        { brand: "Prada", name: "Bonded Gabardine Skirt with Devoré Effect in Ebony", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/PRADA_11000000397819_7106.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/prada-womens-skirts-f0192-aw26-p10g4", shape: "skirt", color: "#8d8d90" },
        { brand: "The Row", name: "Thilde Pant", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/products/3448K106BLKF.jpg?width=900", url: "https://www.therow.com/products/thilde-pant-black", shape: "wideLeg", color: "#8d8d90" },
        { brand: "Khaite", name: "Tessa Skirt in Black Silk", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/TESSA-SKIRT_BLACK_41983037-200_GHOST.jpg?width=900", url: "https://khaite.com/products/tessa-skirt-in-black-silk", shape: "skirt", color: "#1c1c1e" },
        { brand: "Moncler", name: "Cotton Poplin Pants", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/2A00009597LQ742-STRAIGHTLEG-MONCLER-Donna-20260422113409_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-moncler-clothing-trousers-2a00009597lq-742", shape: "wideLeg", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Compact Cotton Toile Trousers in Parchment", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000118041_6068.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-compact-cotton-toile-trousers-9107-aw26-875274v6d10", shape: "wideLeg", color: "#8d8d90" },
        { brand: "Tom Ford", name: "Corded Chalk Stripe Wool Trousers", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/PAW686FAX1870UWA-TAILORED-TOMFORD-Donna-20261006154827_0.jpg?width=900", url: "https://www.antonioli.eu/products/woman-tom-ford-clothing-trousers-paw686fax1870-uwa", shape: "wideLeg", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Leather Trousers in Parchment", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000118068_6058.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-light-matt-leather-trousers-9107-aw26-874267v68f0", shape: "wideLeg", color: "#8d8d90" }
      ]
    },
    {
      id: "footwear",
      name: "Footwear",
      grow: 0.75,
      photoAspect: "4 / 5",
      items: [
        { brand: "The Row", name: "Oscar Boot", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/files/F001236L901BLKG.jpg?width=900", url: "https://www.therow.com/products/oscar-boot-black-1", shape: "chelsea", color: "#8d8d90" },
        { brand: "Khaite", name: "Marlene Knee-High Boot in Natural Python", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/MARLENE-KNEE-HIGH-BOOT-85_NATURAL_F1133-928-121_A.jpg?width=900", url: "https://khaite.com/products/marlene-knee-high-boot-in-natural-python", shape: "chelsea", color: "#e3d9c6" },
        { brand: "Miu Miu", name: "Slingback Pumps", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/5I784E537F0002-KITTENHEEL-MIUMIU-Donna-20261009073822_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-miu-miu-shoes-pumps-5i784e537-f0002", shape: "loafer", color: "#8d8d90" },
        { brand: "Bottega Veneta", name: "Gino Lace-Up Shoe in Black", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/BOTTEGA_1500000122961_5922.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/bottega-veneta-womens-gino-lace-up-crinkled-nappa-1000-aw26-a007afv3oa0", shape: "loafer", color: "#1c1c1e" },
        { brand: "The Row", name: "Lucca Slipper", image: "https://cdn.shopify.com/s/files/1/0552/0313/5593/files/F1883SH07DSTG.jpg?width=900", url: "https://www.therow.com/products/lucca-slipper-desert", shape: "loafer", color: "#8d8d90" },
        { brand: "Khaite", name: "Clive Ankle Boot in Caramel Suede", image: "https://cdn.shopify.com/s/files/1/1519/7996/files/CLIVE-ANKLE-BOOT-35_CARAMEL_F1115-946-902_A.jpg?width=900", url: "https://khaite.com/products/clive-ankle-boot-35-in-caramel", shape: "chelsea", color: "#a8743f" },
        { brand: "Moncler", name: "Moncler Altive Mid Snow Boots", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/4H00100M728721I-ANKLEBOOTS-MONCLER-Donna-20261007081903_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-moncler-shoes-boots-4h00100m7287-21i", shape: "chelsea", color: "#8d8d90" },
        { brand: "Prada", name: "Knee Buckle Boots in Black", image: "https://cdn.shopify.com/s/files/1/0487/8188/5596/files/PRADA_11000000397664_5234.jpg?width=900", url: "https://shop.doverstreetmarket.com/products/prada-womens-boots-leathernon-reptileuppe-f0002-aw26-1w412o", shape: "chelsea", color: "#1c1c1e" },
        { brand: "Gucci", name: "Donna Leather Boots", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/A000RSAAGV91000-HIGHBOOTS-GUCCI-Donna-20261007081947_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-gucci-shoes-boots-a000rsaagv9-1000", shape: "chelsea", color: "#8d8d90" },
        { brand: "Gucci", name: "Rhyton Sneakers", image: "https://cdn.shopify.com/s/files/1/0557/6743/3394/files/A00997A9L009522-LOW-TOP-GUCCI-Donna-20261007081954_1.jpg?width=900", url: "https://www.antonioli.eu/products/woman-gucci-shoes-sneakers-a00997a9l00-9522", shape: "sneaker", color: "#8d8d90" }
      ]
    }
  ],

  // Recommended looks: one item index per part, top to bottom.
  // A random one is shown on first visit.
  looks: [
    [0, 1, 0, 0, 0],
    [5, 6, 6, 8, 8],
    [2, 7, 7, 7, 3],
    [4, 2, 3, 2, 2],
    [1, 8, 4, 4, 6],
    [3, 0, 5, 1, 5]
  ]
};
