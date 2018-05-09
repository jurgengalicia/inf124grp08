<?php
  require_once("pdo.php");
  $orderno = $_GET['orderno']
?>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      Order Confirmation | Mint To Be
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
      <div class="confirmation-container">
        <div id="confirmation-content">
          <div id="confirmation-user">
            <?php
              $sql = "SELECT email, product, quantity FROM orders WHERE orderno = '$orderno'";
              $result = $conn->query($sql);
              if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                  echo '<div>'.$row["email"].'This is your confirmation email for order number:</div>';
                  echo '<div>'.$orderno.'</div>';
                  echo '<div>You have ordered '.$row["quantity"].' '.$row["product"].'</div>';
                }
              }
            ?>
          </div>
          <div id="confirmation-shipping">
            <?php
            $sql = "SELECT street, city, zipcode, state, shipping_method FROM orders WHERE orderno = '$orderno'";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
              while ($row = $result->fetch_assoc()) {
                echo '<div>You will receive your shipment in about '.($row["shipping_method"] == "ground" ? "6" : "2 to 3").' days</div>';
                echo '<div>Your shipping address is: </div>';
                echo '<div>'.$row["street"].'</div>';
                echo '<div>'.$row["city"].','.$row["zipcode"].'</div>';
                echo '<div>'.$row["state"].'</div>';
              }
            }
            ?>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
