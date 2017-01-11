//create items
function Item(place, price, weight) {
  this.place = place;
  this.price = price;
  this.weight = weight;
}


//this function create price for each item
function createPrice() {
  var price = Math.round(Math.random()*100);
  return price;
}

//this function return price for each item
Item.prototype.getPrice = function() {
  return this.price;
};

//this function create weight for each item
function createWeight() {
  var weight = Math.round(Math.random()*20);
  return weight;
}

//this function return weight for each item
Item.prototype.getWeight = function() {
  return this.weight;
};


//this function create categories and set place for all categories
function createPlace() {
  var categories = ['vegitables', 'tv', 'jewellery', 'hygiene', 'ceramics','medicine', 'butchery', 'bakery', 'toys', 'stationary', 'haberdashery', 'instruments', 'perfumery', 'clothes', 'drinks'];
  var place = categories[Math.floor(Math.random()*categories.length)];
  return place;
}

//Create 15 items 
function generateItems() {
  var items = [];
  var allPrices = [];
  var allWeights = [];
  var totalSum = 0;
  for (var i = 0; i < 15; i++) {
    items.push(new Item(createPlace(), createPrice(), createWeight()));
    console.log(items[i]);
    allWeights.push(items[i].getWeight());
    allPrices.push(items[i].getPrice());
    totalSum += items[i].getPrice();
}

  document.getElementById("weight").innerHTML=("Weight of each item: " + allWeights);
  document.getElementById("price").innerHTML=("Price of each item: " + allPrices);
  document.getElementById("total").innerHTML=("You spend : $" + totalSum);
};

generateItems();