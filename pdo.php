<?php
  $servername = "matt-smith-v4.ics.uci.edu";
  $username = "inf124db058";
  $password = "-m5+9_0ob3f6";
  try {
    $conn = new PDO("mysql:host=$servername;dbname=inf124db058", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
    $conn = null;
  }
  catch (PDOException $e) {
    echo "Connection failed:" .$e->getMessage();
  }
?>
