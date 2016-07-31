// The structure of our data will be a list of objects (components).
// The square brackets denote the list (array), the curly  braces contain the objects (components).
// Each component has attributes: componentName, model, make, image, info.
// Your task is to modify this list of objects and add some more to complete the 
// computer build.
// The code I have supplied will automatically update the page based on the contents in the
// components list. Besure to stick to the convensions I set up and keep all the attribute names
// the same for each componenet.

// You may add to the code or html page to alter it to your liking.

var cpu = {
  componentName: "Central Processing Unit",
  model: "FX34",
  make: "AMD",
  image: "https://placehold.it/150x80?text=CPU",
  info: "This is a description of the part.",
  price: 100.00
}

var ram = {
  componentName: "Random Access Memory",
  model: "Vengeance",
  make: "Corsair",
  image: "https://placehold.it/150x80?text=RAM",
  info: "This is a description of the part.",
  price: 200.00
}
var components = [cpu];

function drawComponents() {
  // grab the components container so we can add things to it later
  var container = select("#components");
  
  /*** 
   * For every object in our "components" list, we will do the following:
   *   -Create a cell to hold some information
   *   -Add the component's information to the cell
   *   -Add that completed cell into the webpage in the appropriate location.
   */
  for (var i = 0; i < components.length; i++) {
    var component = components[i];  // this will store each single component object
    
    // Create a cell to hold the component thumbnail
    var cell = createDiv("");        
    cell.addClass("col-sm-3");       // Give that cell certain styling properties.
    cell.style("text-align: left;");
    
    var componentTitle = createElement("h3", component.componentName);
    var info = createP(component.info);  // create a paragraph and place the comonent's info in it.
    var price = createP("Price: " + component.price);
    var makeAndModel = createElement("h4", component.make + " " + component.model);
    
    // create the component's image
    var image = createImg(component.image, component.componentName);
    image.addClass("image-responsive");
    image.style("width: 100%");
    
    // place the parts into the cell
    cell.child(componentTitle);
    cell.child(image);
    cell.child(makeAndModel);
    cell.child(info);  
    cell.child(price);
    
    // finally, place that assembled component cell into the container.
    container.child(cell);  
  }
}

function setup() {
  createCanvas(0, 0);
  drawComponents();
}