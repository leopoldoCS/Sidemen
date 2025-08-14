
<?php
//echo phpinfo();

include_once("Database.php");

$db = new Database();

$db->connect();

if ($db) {
    echo "You are connected";
} else {
    echo "Could not connect";
}







/*
$servername = "hoteldatabase.cx0k04cysbk2.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "Comp380DataBase";
$dbName = "HotelDB";
$conn = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=HotelDB", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
} */




?>
