export default function productToString(d) {
  const title = `${d.item} - £${d.price} (H${d.height} x W${d.width},Doors type: ${d.type}, Doors: ${d.qtyDoors}, Secure to the wall ${d.wall}, Drawers: ${d.drawers}, Baskets: ${d.baskets}, Rails: ${d.rails}, Shelves: ${d.shelves}, Lights: ${d.lights})`;
  return title
}
