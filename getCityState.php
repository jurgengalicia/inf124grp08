

<?php
$cityState = array()

$zip = $_GET["zip"];
   if (array_key_exists($zip, $cityState))
      print $cityState[$zip];
   else
      print " , ";
?>
