<?php 
	$name = $_POST["name"];
	$psd = $_POST["psd"];

	var_dump($name);
	die();
	if ($name ==  "lisi" && $psd == "123456") {
		echo 'success';
	}else{
		echo "fail";
	}

 ?>