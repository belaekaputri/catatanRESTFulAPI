<?php 
$data = file_get_contents("latiha.json"
)
$tampil=json_decode($data,true) //true digunakan untuk menjadi array jika menjadi objek hilangkan true
var_dump($tampil);
?>