const data = {
  "Strawberry": {
    "price": "10.00",
    "description": "Strawberry icecream made from fresh strawberries picked in Garden Grove"
  },
  "Chocolate": {
    "price": "10.00",
    "description": "Ice cream made from decadent chocolate imported from Belgium"
  },
  "Vanilla": {
    "price": "10.00",
    "description": "Fresh french vanilla is used to make every batch of this ice cream"
  },
  "Mint": {
    "price": "10.00",
    "description": "Our house signature; cool, refreshing, and packed with chocolate chips"
  },
  "Rocky Road": {
    "price": "12.00",
    "description": "Our rocky road is filled with chunks of goodness in every bite"
  },
  "Green Tea": {
    "price": "12.00",
    "description": "Green tea ice cream made from 100% Japanese matcha"
  },
  "Orange Creamsicle": {
    "price": "12.00",
    "description": "Vanilla ice cream mixed with notes of orange to produce a nostaglic taste"
  },
  "Butter Pecan": {
    "price": "12.00",
    "description": "A rich and creamy offering fresh from the South"
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
          ${name}
        </div>
        <div class="merchanise-price">
          $${price}
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
