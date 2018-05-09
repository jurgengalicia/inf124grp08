<?php
  require_once("pdo.php");
  $id = $_GET['id']
?>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      Group 8 Icecream
    </title>
    <link rel="icon" type="image/png" href="img/favicon.png" sizes="32x32" />
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/merchandise.js"></script>
  <head/>
  <body>
    <div class="main-container">
      <div id="top-navigation-header">
        <ul id="top-nav-header-list">
          <li class="nav-dropdown">
            <a href="./index.html">Home</a>
          </li>
          <li class="nav-dropdown">
            <a href="#">Shop</a>
            <div class="nav-dropdown-content">
              <a href="soft_serve.php">Soft Serve</a>
              <a href="popsicle.php">Popsicles</a>
              <a href="shaved_ice.php">Shaved Ice</a>
            </div>
          </li>

        </ul>
      </div>
      <div class="push"></div>
      <div class="merchandise-container">
        <div id="merchandise-content">
          <?php
            $sql = "SELECT name, price, description, review, ingredients FROM merchandise WHERE id = '$id'";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
              while ($row = $result->fetch_assoc()) {
                echo '<div class="merchandise-focused"><div class="merchandise-info">';
                echo '<div class="merchanise-name">'.$row["name"].'</div>';
                echo '<div class="merchanise-price">$'.$row["price"].'</div>';
                echo '</div></div>';
                echo '<div class="merchandise-focused blue">';
                echo '<div class="merchandise-info">'.$row["description"].'</div></div>';
                echo '<div class="merchandise-focused yellow"><div class="merchandise-info">';
                echo '<div class="merchanise-name">Ingredients:</div>';
                echo '<div class="merchanise-info">'.$row["ingredients"].'</div>';
                echo '</div></div>';
                echo '<div class="merchandise-focused mint"><div class="merchandise-info">';
                echo '<div class="merchandise-name">Rating:</div>';
				echo '<div class="merchandise-info">'.$row["review"].'</div>';
                echo '</div></div>';
              }
            } else {
              echo "No matching results found.";
            }
          ?>
        </div>
        <div id="merchandise-media">
          <?php
          $sql = "SELECT image FROM merchandise WHERE id = '$id'";
          $result = $conn->query($sql);
          if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              echo('<div class="merchandise-images">');
              echo('<img src="'.$row['image'].'" height="100%" width="100%"  />');
              echo('</div>');
            }
          } else {
            echo "No matching results found.";
          }
          ?>
        </div>
      </div>
      <div class="checkout-container">
        <form name="productForm" action="javascript:sendEmailOnPurchase()">
          <div>
            <div class="form-info">
              <div class="form-info-name">
                Product Name:
              </div>
              <select id="product-type-select">
          		  <option value="ssstrawberry">Strawberry</option>
          		  <option value="sschocolate">Chocolate</option>
          		  <option value="ssvanilla">Vanilla</option>
          		  <option value="ssmint">Mint</option>
          		  <option value="ssrocky">Rocky Road</option>
          		  <option value="ssgreen">Green Tea</option>
          		  <option value="ssorange">Orange Creamsicle</option>
          		  <option value="sspecan">Butter Pecan</option>
          		  <option value="popmango">Spicy Mango</option>
          		  <option value="popmelon">Melonsicle</option>
          		  <option value="popwater">Watermelon Popsicle</option>
          		  <option value="popbanana">Banana Chocolate</option>
          		  <option value="icematcha">Matcha Shaved Ice</option>
          		  <option value="icestrawberry">Strawberry Shaved Ice</option>
          		  <option value="icemango">Mango Shaved Ice</option>
          		  <option value="icesesame">Black Sesame Shaved Ice</option>
          		</select>
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Quantity
              </div>
              <input type="number" name="Quantity" value="1">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                First name:
              </div>
              <input type="text" name="FirstName" value="" placeholder="Ben">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Last name:
              </div>
              <input type="text" name="LastName" value="" placeholder="Jerrys">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Email Address:
              </div>
              <input type="email" required name="EmailAddress" value="" placeholder="benjerrys@icecream.com">
            </div>
			<div class="form-info">
              <div class="form-info-name">
                Phone Number:
              </div>
              <input type="text" pattern="^\d{3}-\d{3}-\d{4}$" required name="PhoneNumber" value="" placeholder="XXX-XXXX-XXXX">
            </div>
          </div>
          <div>
            <div class="form-info">
              <div class="form-info-name">
                Street Address:
              </div>
              <input type="text" required name="ShippingAddress" value="" placeholder="1234 Pleasant Park">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Zip code:
              </div>
              <input type="text" pattern="^\d{4}|\d{5}$" required name="Zipcode" value="" placeholder="XXXXX" onblur = "getPlace(this.value)">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                City:
              </div>
              <input type="text" id="City" required name="City" value="" placeholder="Salty Springs">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                State:
              </div>
              <input type="text" id="State" required pattern="^[A-Z]{2}$" name="State" value="" placeholder="FN">
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Shipping Method:
              </div>
              <select>
          		  <option value="Overnight">Overnight</option>
          		  <option value="2Days">2-Days expidited</option>
          		  <option value="6Days">6-Days ground</option>
          		</select>
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Credit Card Type:
              </div>
              <select>
          		  <option value="Visa">Visa</option>
          		  <option value="MC">Master Card</option>
          		  <option value="AmEx">American Express</option>
          		</select>
            </div>
            <div class="form-info">
              <div class="form-info-name">
                Credit Card Number:
              </div>
              <input type="card" pattern="^\d{4}-\d{4}-\d{4}-\d{4}$" required name="Card" value="" placeholder="XXXX-XXXX-XXXX-XXXX">
            </div>
            <div class="form-button">
              <input type="submit" type="card" value="Submit">
            </div>
          </div>
      	</form>
      </div>
    </div>
  </body>
</html>
