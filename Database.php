

<?php
/*

Author: Rajvir

Date: 8/13/2025

This a database class used to connect to the database with PHP. It has one connect method that has no arguments but creates the connection
with the database based on literals that are inputted directly into the code. It provides a message whether a connection was established.

*/

class Database
{
    private $servername;
    private $username;
    private $password;
    private $dbName;
    private $connection;


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

        $this->connection = $conn;
        //return $conn;
    }
    //have insert return the last id in the booking table as a booking id
    public function insert($f_name, $l_name, $email, $address, $zip, $city, $state, $creditcard, $cc_month, $cc_year)
    {
        //$is_successful = false;

        $sql = "INSERT INTO Customer (
             First_name,
             Last_name,
             email,
             Address,
             Zip,
             City,
             State,
             Credit_Card,
             Credit_Card_Month,
             Credit_Card_Year
           )
         VALUES (
               '$f_name',
                '$l_name',
                '$email',
                '$address',
                '$zip',
                '$city',
                '$state',
                '$creditcard',
                '$cc_month',
                '$cc_year'
           )";



        if ($this->connection->query($sql) === TRUE) {
            echo "New Customer record created successfully";
        } else {
            echo "
            Error: " . $sql . "<br>" . $this->connection->error;
        }

        $last_custID = $this->connection->insert_id;

        $sql2 = "INSERT INTO Bookings (CustomerID) VALUES ($last_custID)";

        $last_bookingID = 0;



        if ($this->connection->query($sql2) === TRUE) {

            $last_bookingID = $this->connection->insert_id;

            echo "New Booking record created successfully";
            echo "Thank you " . $f_name . " for your booking. Your booking ID is: " . $last_bookingID . ". A confirmation email
            has been sent to " . $email;
        } else {
            echo "
            Error: " . $sql2 . "<br>" . $this->connection->error;
        }
    }

    public function delete($bookingId)
    {
        $conn = $this->connection;
        $bookingId = (int)$bookingId;


        //Retrieve associated customer id with the booking id
        $sqlCustID = "SELECT CustomerID FROM Bookings WHERE BookingID = $bookingId";

        $result = $conn->query($sqlCustID);

        $row = $result->fetch_assoc();

        $custID = (int)$row["CustomerID"];




        $sql = "DELETE FROM Bookings WHERE BookingID = $bookingId";


        //Delete booking by booking ID

        if ($conn->query($sql) === TRUE) {
            echo "Booking ID deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }







        $sqlGetCustInfo = "SELECT First_name, email FROM Customer WHERE id = $custID";

        $result2 = $conn->query($sqlGetCustInfo);

        $row2 = $result2->fetch_assoc();

        $f_name =  $row2['First_name'];

        $email = $row2['email'];




        $sqlCount = "SELECT COUNT(*) AS cnt FROM Bookings WHERE CustomerID = $custID";

        $result3 = $conn->query($sqlCount);

        $cnt = 0;

        if ($result3) {
            $row3 = $result3->fetch_assoc();
            $cnt = (int)$row3['cnt'];
        }

        if ($cnt === 0) {
            $sqlDelCust = "DELETE FROM Customer WHERE id = $custID";
            if ($conn->query($sqlDelCust) === TRUE) {
                echo "Booking $bookingId deleted. Thank you " .  $f_name . "Email sent to: " . $email;
            } else {
                echo "Booking deleted, but failed to delete customer: " . $conn->error;
            }
        } else
            echo "Booking $bookingId deleted. Thank you " .  $f_name . "Email sent to: " . $email; {
        }
    }
}

?>
