<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidemen Hotels/Reserve a Room</title>
    <link rel="stylesheet" href="styles/SandR.css" />
    <link href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" />
</head>

<body>
    <!--BAR WHICH INCLUDES TITLE,QUOTE< AND THREE OPTIONS-->
    <div class="top-border">

        <div class="brand">
            <a href="homepage.html" class="invisibleboarder">
                <h1> SIDEMEN HOTEL SUITES</h1>
                <p>LUXURY LIKE YOU HAVE NEVER SEEN BEFORE</p>
            </a>
        </div>


        <div class="nav-links">
            <a href="SandR.html">Search & Reserve a Room</a>
            <a href="manage.html">Manage Your Reservation</a>
            <a href="reports.php">Manager Reports</a>
        </div>
    </div>

    <?php
    //echo phpinfo();

    include_once("Database.php");

    $db = new Database();

    $db->connect();

    if (isset($_POST["cancelBooking"])) {
        //echo "IN SINGLE IF";
        $booking = $_POST['bookingId'];
        $db->delete($booking);
    }




    ?>


</body>

</html>