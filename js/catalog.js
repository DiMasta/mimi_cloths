// Curated pieces from top-of-the-shelf houses, ordered top to bottom.
// `shape` picks an illustration from garments.js; `color` tints it.
window.Catalog = {
  parts: [
    {
      id: "headwear",
      name: "Headwear",
      grow: 0.62,
      items: [
        { brand: "Loro Piana", name: "Cashmere Baseball Cap", shape: "cap", color: "#c9b796" },
        { brand: "Acne Studios", name: "Ribbed Wool Beanie", shape: "beanie", color: "#e7b7bc" },
        { brand: "Prada", name: "Re-Nylon Bucket Hat", shape: "bucket", color: "#1f1f22" },
        { brand: "Borsalino", name: "Fur Felt Fedora", shape: "fedora", color: "#5b4636" },
        { brand: "Brunello Cucinelli", name: "Cashmere Rib Beanie", shape: "beanie", color: "#a19b92" },
        { brand: "The Row", name: "Cotton Twill Cap", shape: "cap", color: "#2c3446" }
      ]
    },
    {
      id: "outerwear",
      name: "Outerwear",
      grow: 1.1,
      items: [
        { brand: "Max Mara", name: "Camel Wrap Coat", shape: "coat", color: "#c39a68" },
        { brand: "Burberry", name: "Heritage Trench Coat", shape: "trench", color: "#c9ae80" },
        { brand: "Moncler", name: "Down Puffer Jacket", shape: "puffer", color: "#1f2a44" },
        { brand: "Saint Laurent", name: "Leather Bomber", shape: "bomber", color: "#18181a" },
        { brand: "The Row", name: "Double-Faced Wool Coat", shape: "coat", color: "#3b3b3e" },
        { brand: "Zegna", name: "Suede Bomber", shape: "bomber", color: "#8a6a4f" }
      ]
    },
    {
      id: "top",
      name: "Top",
      grow: 1,
      items: [
        { brand: "The Row", name: "Luke Cotton T-Shirt", shape: "tee", color: "#f6f3ec" },
        { brand: "Brunello Cucinelli", name: "Cashmere Crewneck", shape: "sweater", color: "#d9ccb3" },
        { brand: "Loro Piana", name: "Linen Shirt", shape: "shirt", color: "#d6e2ee" },
        { brand: "Tom Ford", name: "Silk-Blend Polo", shape: "polo", color: "#2a3955" },
        { brand: "Jil Sander", name: "Cotton Poplin Shirt", shape: "shirt", color: "#fbfaf6" },
        { brand: "Bottega Veneta", name: "Wool Knit Sweater", shape: "sweater", color: "#3d8b40" },
        { brand: "Prada", name: "Re-Nylon Black Tee", shape: "tee", color: "#1d1d1f" }
      ]
    },
    {
      id: "bottoms",
      name: "Bottoms",
      grow: 1.25,
      items: [
        { brand: "Zegna", name: "Wool Tailored Trousers", shape: "trousers", color: "#6c6d70" },
        { brand: "Acne Studios", name: "Straight-Leg Jeans", shape: "jeans", color: "#4b6b90" },
        { brand: "The Row", name: "Wide-Leg Wool Trousers", shape: "wideLeg", color: "#e8e0d1" },
        { brand: "Miu Miu", name: "Pleated Wool Skirt", shape: "skirt", color: "#2b2b2e" },
        { brand: "Brunello Cucinelli", name: "Cotton Chino Shorts", shape: "shorts", color: "#b9a27c" },
        { brand: "Saint Laurent", name: "Slim Black Jeans", shape: "jeans", color: "#232325" },
        { brand: "Loro Piana", name: "Linen Drawstring Trousers", shape: "wideLeg", color: "#f1ece2" }
      ]
    },
    {
      id: "footwear",
      name: "Footwear",
      grow: 0.55,
      items: [
        { brand: "Common Projects", name: "Achilles Low Sneaker", shape: "sneaker", color: "#f7f6f2", accent: "#b8913c" },
        { brand: "Gucci", name: "Horsebit Leather Loafer", shape: "loafer", color: "#3c2618", accent: "#c9a24a" },
        { brand: "John Lobb", name: "Leather Derby", shape: "derby", color: "#1e1a18" },
        { brand: "Saint Laurent", name: "Wyatt Chelsea Boot", shape: "chelsea", color: "#151517" },
        { brand: "Loro Piana", name: "Suede Summer Walk Loafer", shape: "loafer", color: "#c6a87f" },
        { brand: "Church's", name: "Polished Derby", shape: "derby", color: "#6b3a22" }
      ]
    }
  ],

  // Recommended looks: one item index per part, top to bottom.
  // A random one is shown on first visit.
  looks: [
    [0, 4, 1, 2, 4],
    [3, 1, 4, 0, 2],
    [2, 2, 0, 1, 0],
    [1, 3, 6, 5, 3],
    [4, 0, 1, 3, 1],
    [5, 5, 2, 4, 0]
  ]
};
