<?php
  $servername = "matt-smith-v4.ics.uci.edu";
  $username = "inf124db058";
  $password = "-m5+9_0ob3f6";
  try {
    $conn = mysqli_connect($servername, $username, $password, $username);
    echo "Connected successfully";
  }
  catch (PDOException $e) {
    echo "Connection failed:" .$e->getMessage();
  }
?>
