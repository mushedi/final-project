<!-- /* Azul Lanas
Date: 12/13/2020 */ -->

<?php
require_once 'mustache/mustache/src/Mustache/Autoloader.php';
Mustache_Autoloader::register();

$m = new Mustache_Engine;

$header = file_get_contents('templates/header.html');
$body = file_get_contents('templates/volunteer.html');
$footer = file_get_contents('templates/footer.html');

$header_data = ["title" => "Volunteer", "datecss" => "href='css/jquery-ui.min.css'"];
$footer_data = ["script" => "src='js/main.js'", "jQui" => "src='js/jquery-ui.min.js'"];

echo $m->render($header, $header_data) . PHP_EOL;
echo $m->render($body) . PHP_EOL;
echo $m->render($footer, $footer_data) . PHP_EOL;

?>