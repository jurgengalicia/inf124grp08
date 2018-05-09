const data = {
  "Strawberry": {
    "price": "10.00",
    "ingredients": "Fresh strawberries, eggs, cream, vanilla, sugar",
    "rating": "4/5 stars: prominent and delicious strawberry taste IMHO.",
    "reviewer": "Fanny",
    "description": "Strawberry icecream made from fresh strawberries picked in Garden Grove"
  },
  "Chocolate": {
    "price": "10.00",
    "ingredients": "Cocoa powder, eggs, cream, vanilla, sugar",
    "rating": "2/5 stars: Why did I get chocolate? I dont like Chocolate.",
    "reviewer": "Robin",
    "description": "Ice cream made from decadent chocolate imported from Belgium"
  },
  "Vanilla": {
    "price": "10.00",
    "ingredients": "Eggs, cream, vanilla, sugar",
    "rating": "5/5 stars: The best type of ice cream is the regular ice cream. VANILLA",
    "reviewer": "Josh",
    "description": "Fresh french vanilla is used to make every batch of this ice cream"
  },
  "Mint": {
    "price": "10.00",
    "ingredients": "Mint extract, cream, vanilla, sugar, chocolate chips",
    "rating": "5/5 stars: Its cold, cool and refreshing. it feels like I just brushed my teeth!",
    "reviewer": "Khuong",
    "description": "Our house signature; cool, refreshing, and packed with chocolate chips"
  },
  "Rocky Road": {
    "price": "12.00",
    "ingredients": "Cocoa powder, eggs, cream, vanilla, sugar, nuts, marshmallow",
    "rating": "3.9/5 stars: It tasted great but some chunks were way too big for me.",
    "reviewer": "Jurgen",
    "description": "Our rocky road is filled with chunks of goodness in every bite"
  },
  "Green Tea": {
    "price": "12.00",
    "ingredients": "Natural green tea leaves, eggs, cream, vanilla, sugar",
    "rating": "4/5 stars: It tastes kinda like matcha.. But it's fine. I LOVE MATCHA!",
    "reviewer": "Christine",
    "description": "Green tea ice cream made from 100% Japanese matcha"
  },
  "Orange Creamsicle": {
    "price": "12.00",
    "ingredients": "Freshly squeezed orange, eggs, cream, vanilla, sugar",
    "rating": "4.5/5 stars: This tastes REALLY fresh. Highly recommend.",
    "reviewer": "Christian",
    "description": "Vanilla ice cream mixed with notes of orange to produce a nostaglic taste"
  },
  "Butter Pecan": {
    "price": "12.00",
    "ingredients": "Raw pecans, butter, eggs, cream, vanilla, sugar",
    "rating": "4/5 stars: Pecan flavored ice cream sounds pretty weird but I ended up liking it!",
    "reviewer": "Jasmine",
    "description": "A rich and creamy offering fresh from the South"
  },
  "Spicy Mango": {
    "price": "13.00",
    "ingredients": "Yogurt, mango, chamoy. sugar/honey, taijin",
    "rating": "5/5 stars: My all time favorite. It tastes exactly like one of those mexican candies.",
    "reviewer": "Talor",
    "description": "Refreshing mango and chamoy popsicle spiced with mexican chiles"
  },
  "Melonsicle": {
    "price": "12.00",
    "ingredients": "Yogurt, melon, cantaloupe, honey, lemon",
    "rating": "4.7/5 stars: It was extremely hot today and these came right on time.",
    "reviewer": "Vanessa",
    "description": "Sweet and soothing duo of honeydew and cantaloupe"
  },
  "Watermelon Popsicle": {
    "price": "12.00",
    "ingredients": "Yogurt, watermelon, sugar, lime juice",
    "rating": "6/5 stars: They look soooooo pretty!! and it tastes good too!!",
    "reviewer": "Jennifer",
    "description": "Cool and fresh watermelon flavor perfect for the summer time"
  },
  "Banana Chocolate": {
    "price": "10.00",
    "ingredients": "Yogurt, banana, Cocoa powder, honey",
    "rating": "1.5/5 stars: The chocolate overpowers the banana. This is a disappointing version of a banana split.",
    "reviewer": "Helen",
    "description": "Creamy blend of chocolate and banana for your sweet tooth"
  },
  "Matcha Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, matcha powder, whole milk, heavy cream, sugar",
    "rating": "6/5 stars: Christine here back for another review. MATCHA IS LIFE.",
    "reviewer": "Christine",
    "description": "A Japanese inspired shaved ice made from finely ground green tea leaves"
  },
  "Strawberry Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, Strawberry, whole milk, heavy cream, sugar",
    "rating": "3.8/5 stars: It could use some more sugar. I think this product can do better.",
    "reviewer": "Chris",
    "description": "Made with freshly picked strawberries from a local farm topped with more strawberries!"
  },
  "Mango Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, Mango, whole milk, heavy cream, honey syrup",
    "rating": "3/5 stars: its kind of a bit bland. They should spice it up a bit",
    "reviewer": "Ryan",
    "description": "Shaved ice made from a tropical delight, packed with healthy sugars and vitamin C"
  },
  "Black Sesame Shaved Ice": {
    "price": "11.00",
    "ingredients": "Ice, ground black sesame, whole milk, heavy cream, honey syrup",
    "rating": "4.3/5 stars: I'm not a big fan of how this tastes but I'm all in for a better digestion!",
    "reviewer": "Min",
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

function validateForm() {
  if (document.forms["productForm"]["FirstName"].value === "") {
    alert("First Name must be filled");
    return false;
  }
  else if (document.forms["productForm"]["LastName"].value === "") {
    alert("Last Name must be filled");
    return false;
  }
  else if (document.forms["productForm"]["EmailAddress"].value === "") {
    alert("Email Address must be filled");
    return false;
  }
  else if (document.forms["productForm"]["ShippingAddress"].value === "") {
    alert("Shipping Address must be filled");
    return false;
  }
  return true;
}

function sendEmailOnPurchase() {
  if (validateForm()) {
    var emailData = {
      "email": document.forms["productForm"]["EmailAddress"].value,
      "body": {
        "product": document.getElementById("product-type-select").value,
        "quantity": document.forms["productForm"]["Quantity"].value
      }
    }
    window.location.href = `mailto:purchase@minttobe.com?subject=Purchase From Mint To Be&body=You have bought ${emailData.body.quantity} ${emailData.body.product}`;
    return false;
  }
  else {
    return false;
  }

}

function getPlace (zip){
  if (window.XMLHttpRequest)
     var xhr = new XMLHttpRequest();
  else
     var xhr = new ActiveXObject ("Microsoft.XMLHTTP");

  xhr.onreadystatechange = function (){.
    if (xhr.readyState == 4 && xhr.status == 200){
      var result = xhr.responseText;
      var place = result.split (', ');
      //if (document.getElementById ("city").value == "")
        document.getElementById ("city").value = place[0];
      //if (document.getElementById ("state").value == "")
        document.getElementById ("state").value = place[1];
    } 
  } 
  //xhr.open ("GET", "getCityState.php?zip=" + zip, true);
  //xhr.send ();
  xhr.open ("POST", "getCityState.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhr.send ("zip="+zip);  
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
          ${"Rating:"}
        </div>
        <div class="merchanise-name">
          ${data[name].rating}
        </div>
        <div class="merchanise-name">
          ${"-"+data[name].reviewer}
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
