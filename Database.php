<?php

class Database
{
    private $servername;
    private $username;
    private $password;
    private $dbName;




    public function connect()
    {
        $this->servername = "hoteldatabase.cx0k04cysbk2.us-east-2.rds.amazonaws.com";
        $this->username = "admin";
        $this->password = "Comp380DataBase";
        $this->dbName = "HotelDB";

        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbName);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        echo "Connected successfully";

        return $conn;
    }
}
