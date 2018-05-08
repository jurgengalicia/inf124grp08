<?php
require_once "pdo.php";
?>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      Soft Serve | Mint To Be
    </title>
    <link rel="icon" type="image/png" href="img/favicon.png" sizes="32x32" />
    <link rel="stylesheet" href="css/styles.css">
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
      <div class="item-gallery">
        <table class="merchandise-list">
          <?php
          $sql = "SELECT * FROM merchandise WHERE category = 'soft_serve'";
          $result = $conn->query($sql);
          if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
              echo('<tr><td><a href="merchandise.php?id='.$row['id'].'"><div class="merchandise">');
              echo('<img class="zoom" src="'.$row["image"].'" class="merchandise-image" />');
              echo('<div class="merchandise-info">'.$row["name"].'</div>');
              echo('<div class="merchandise-price">'.$row["price"].'</div>');
              echo("</div></a></td></tr>");
            }
          } else {
            echo "No matching results found.";
          }
          ?>
        </table>
      </div>
    </div>
  </body>
  </html>
