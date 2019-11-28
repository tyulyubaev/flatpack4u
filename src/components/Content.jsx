const baseNumber = ((+new Date())/100/60/60/24).toString().slice(3);
const customersNumber=Math.floor(baseNumber*1.87);
const ordersNumber=Math.floor(customersNumber*1.37);
const furnitureNumber=Math.floor(ordersNumber*1.22);


export const Content = {

  Carousel: {
    title: ["Title 1", "Title 2", "Title 3"],
    content: [
      "1 Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit",
      "2 Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit",
      "3 Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit"
    ]
  },

  Figures: {
    figure1: {
      number: customersNumber,
      head: "Customers",
      text: "trusted us to assemble their furniture items."
    },
    figure2: {
      number: ordersNumber,
      head: "Orders",
      text: "have been succesefully completed"
    },
    figure3: {
      number: furnitureNumber,
      head: "Furniture items",
      text: "have been assembled."
    }
  },

  
 

  Featurette: [
    {
      heading: "First featurette heading.",
      muted: "1 It’ll blow your mind.",
      lead: "1 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
    },
    {
      heading: "Second featurette heading.",
      muted: "2 It’ll blow your mind.",
      lead: "2 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
    },
    {
      heading: "Fird featurette heading.",
      muted: "3 It’ll blow your mind.",
      lead: "3 Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
    }
  ] 
}




