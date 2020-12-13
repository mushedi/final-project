<!-- /* Azul Lanas
Date: 12/13/2020 */ -->

<?php
require_once 'mustache/mustache/src/Mustache/Autoloader.php';
Mustache_Autoloader::register();

$m = new Mustache_Engine;

$header = file_get_contents('templates/header.html');
$body = file_get_contents('templates/player.html');
$footer = file_get_contents('templates/footer.html');

$header_data = ["title" => "Dice Game"];
$body_data = ['player' => 'P2', 'pName' => 'Player 2'];
$footer_data = ["script" => "src='js/main.js'"];

echo $m->render($header, $header_data) . PHP_EOL;
echo $m->render($body, $body_data) . PHP_EOL;
echo $m->render($footer, $footer_data) . PHP_EOL;

?>