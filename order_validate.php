<?php
  $firstNameErr = $lastNameErr = $emailErr = $streetErr = $cityErr = $zipcodeErr = $stateErr = "";
  $firstName = $lastName = $email = $street = $city = $zipcode = $state = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["firstName"])) {
      $firstNameErr = "First name is required";
    } else {
      $firstName = $_POST["firstName"];
    }

    if (empty($_POST["lastName"])) {
      $firstNameErr = "Last name is required";
    } else {
      $firstName = $_POST["lastName"];
    }

    if (empty($_POST["email"])) {
      $firstNameErr = "Email address is required";
    } else {
      $firstName = $_POST["email"];
    }

    if (empty($_POST["street"])) {
      $firstNameErr = "Street is required";
    } else {
      $firstName = $_POST["street"];
    }

    if (empty($_POST["city"])) {
      $firstNameErr = "City is required";
    } else {
      $firstName = $_POST["city"];
    }

    if (empty($_POST["zipcode"])) {
      $firstNameErr = "Zipcode is required";
    } else {
      $firstName = $_POST["zipcode"];
    }

    if (empty($_POST["state"])) {
      $firstNameErr = "State is required";
    } else {
      $firstName = $_POST["state"];
    }
  }
?>
