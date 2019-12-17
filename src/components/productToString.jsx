export default function productToString(d) {  
  let title=""
  if (d.item=="Wardrobe"){
    title = `${d.item} - £${d.price} (H${d.height} x W${d.width},Doors type: ${d.type}, Doors: ${d.qtyDoors}, Secure to the wall ${d.wall}, Drawers: ${d.drawers}, Baskets: ${d.baskets}, Rails: ${d.rails}, Shelves: ${d.shelves}, Lights: ${d.lights})`;
  }

  if (d.item.search("Chest")==0){
    title = `${d.item} - £${d.price}`;
  }  

  if (d.item=="Bed"){
    const drawers = d.drawers>0 ? `, With ${d.drawers} drawers` : "."
    title = `${d.item} - £${d.price} Size - ${d.size}, Type - ${d.type}${drawers}`;
  }  

  if (d.item == "TV Mounting") {
    title = `${d.item} - £${d.price}, TV size - ${d.tvsize}, Wall - ${d.wall}.`;
  }
  if (d.item == "Blinds") {
    title = `${d.item} - £${d.price}, Type - ${d.type}, Width - ${d.width}cm, Wall - ${d.wall}.`;
  }

  if (d.item == "Hanging") {
    title = `${d.type} ${d.item} - £${d.price}, Width - ${d.width}cm, Wall - ${d.wall}.`;
  }


  return title
}
