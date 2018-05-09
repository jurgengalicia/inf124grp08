<?php
  $servername = "matt-smith-v4.ics.uci.edu";
  $username = "inf124db058";
  $password = "-m5+9_0ob3f6";

$conn = mysqli_connect($servername, $username, $password, $username);

if ($conn->connect_error) 
	die("Connection failed: " . $conn->connect_error);

$sql = "INSERT INTO orders (email, street, city, zipcode, state, shipping_method, product, quantity, orderno)
VALUES ('John', 'Doe', 'john@example.com')";
	
if ($conn->query($sql) === TRUE) 
	echo "New record created successfully";
	else 
		echo "Error: " . $sql . "<br>" . $conn->error;
		
		
$conn->close();

?>
