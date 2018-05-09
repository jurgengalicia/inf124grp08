<?php
$cityState = array();
$fp = fopen("csv/zip_codes.csv","r");
if($fp){
	while(($line = fgets($fp)) !== false){
		$parts = explode(",",$line);
		$key = str_replace("\"","",$parts[0]);
		$val = str_replace("\"","",$parts[2] . "," . $parts[1]);
		$cityState[$key] = $val;
	}
}


$zip = $_GET["zip"];
   if (array_key_exists($zip, $cityState))
      print $cityState[$zip];
   else
      print " , ";
?>
