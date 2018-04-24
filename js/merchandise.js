const data = {
  "Strawberry": {
    "price": "10.00",
    "ingredients": "Fresh strawberries, eggs, cream, vanilla, sugar",
    "description": "Strawberry icecream made from fresh strawberries picked in Garden Grove"
  },
  "Chocolate": {
    "price": "10.00",
    "ingredients": "Cocoa powder, eggs, cream, vanilla, sugar",
    "description": "Ice cream made from decadent chocolate imported from Belgium"
  },
  "Vanilla": {
    "price": "10.00",
    "ingredients": "Eggs, cream, vanilla, sugar",
    "description": "Fresh french vanilla is used to make every batch of this ice cream"
  },
  "Mint": {
    "price": "10.00",
    "ingredients": "Mint oil, cream, vanilla, sugar, chocolate chips",
    "description": "Our house signature; cool, refreshing, and packed with chocolate chips"
  },
  "Rocky Road": {
    "price": "12.00",
    "ingredients": "Cocoa powder, eggs, cream, vanilla, sugar, nuts, marshmallow",
    "description": "Our rocky road is filled with chunks of goodness in every bite"
  },
  "Green Tea": {
    "price": "12.00",
    "ingredients": "Natural green tea leaves, eggs, cream, vanilla, sugar",
    "description": "Green tea ice cream made from 100% Japanese matcha"
  },
  "Orange Creamsicle": {
    "price": "12.00",
    "ingredients": "Freshly squeezed orange, eggs, cream, vanilla, sugar",
    "description": "Vanilla ice cream mixed with notes of orange to produce a nostaglic taste"
  },
  "Butter Pecan": {
    "price": "12.00",
    "ingredients": "Raw pecans, butter, eggs, cream, vanilla, sugar",
    "description": "A rich and creamy offering fresh from the South"
  },
  "Spicy Mango": {
    "price": "13.00",
    "ingredients": "Yogurt, mango, chamoy. sugar/honey, taijin",
    "description": "Refreshing mango and chamoy popsicle spiced with mexican chiles"
  },
  "Melonsicle": {
    "price": "12.00",
    "ingredients": "Yogurt, melon, cantaloupe, honey, lemon",
    "description": "Sweet and soothing duo of honeydew and cantaloupe"
  },
  "Watermelon Popsicle": {
    "price": "12.00",
    "ingredients": "Yogurt, watermelon, sugar, lime juice",
    "description": "Cool and fresh watermelon flavor perfect for the summer time"
  },
  "Banana Chocolate": {
    "price": "10.00",
    "ingredients": "Yogurt, banana, Cocoa powder, honey",
    "description": "Creamy blend of chocolate and banana for your sweet tooth"
  },
  "Matcha Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, matcha powder, whole milk, heavy cream, sugar",
    "description": "A Japanese inspired shaved ice made from finely ground green tea leaves"
  },
  "Strawberry Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, mango, whole milk, heavy cream, sugar",
    "description": "Made with freshly picked strawberries from a local farm topped with more strawberries!"
  },
  "Mango Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, strawberry, whole milk, heavy cream, honey syrup",
    "description": "Shaved ice made from a tropical delight, packed with healthy sugars and vitamin C"
  },
  "Black Sesame Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, ground black sesame, whole milk, heavy cream, honey syrup",
    "description": "This healthy shaved ice composed of black sesame provides the customer with a better digestion"
  }
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function() {
  var name = getParameterByName("name");
  var price = getParameterByName("price");
  document.getElementById("merchandise-content").innerHTML =
  `
    <div class="merchandise-focused">
      <div class="merchandise-info">
        <div class="merchanise-name">
          ${name}
        </div>
        <div class="merchanise-price">
          $${data[name].price}
        </div>
      </div>
    </div>
    <div class="merchandise-focused blue">
      <div class="merchandise-info">
        ${data[name].description}
      </div>
    </div>
    <div class="merchandise-focused yellow">
      <div class="merchandise-info">
		<div class="merchanise-name">
          ${"Ingredients:"}
        </div>
        <div class="merchanise-name">
          ${data[name].ingredients}
        </div>
      </div>
    </div>
    <div class="merchandise-focused mint">
      <div class="merchandise-info">
        <div class="merchanise-name">
          ${name}
        </div>
        <div class="merchanise-price">
          $${price}
        </div>
      </div>
    </div>
  `;
  document.getElementById("merchandise-media").innerHTML =
  `
  <div class="merchandise-images">
    <img src="./img/${name}.jpg" height="100%" width="100%"/>
  </div>
  `
}
