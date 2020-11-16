<?php
require_once 'mustache/mustache/src/Mustache/Autoloader.php';
Mustache_Autoloader::register();

$m = new Mustache_Engine;

$header = file_get_contents('templates/header.html');
$body = file_get_contents('templates/home.html');
$footer = file_get_contents('templates/footer.html');

$header_data = ["title" => "Home"];

// $footer_data = [
//     "localtime" => date('l jS \of F Y h:i:s A'),
//     "footertitle" => "Home Page"];

echo $m->render($header, $header_data) . PHP_EOL;
echo $m->render($body) . PHP_EOL;
echo $m->render($footer) . PHP_EOL;

?>