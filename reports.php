<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Sidemen Hotel - Booking Reports</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles/style.css" />

  <!-- Optional inline styles for report layout -->
  <style>
    body {
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f2f2f2;
    }

    h1 {
      text-align: center;
      color: #333;
    }

    #bookingReport {
      margin-top: 30px;
    }

    .report-card {
      background: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .report-card p {
      margin: 6px 0;
    }

    .report-card h3 {
      margin: 0 0 10px 0;
      color: #444;
    }

    .back-link {
      text-align: center;
      margin-top: 20px;
    }

    .back-link a {
      color: #0077cc;
      text-decoration: none;
    }

    .back-link a:hover {
      text-decoration: underline;
    }
  </style>
</head>

<body>

  <h1>Customer Booking Reports</h1>

  <div id="bookingReport"></div>

  <div class="back-link">
    <p><a href="homepage.html">← Back to Home</a></p>
  </div>

    <?php
    include_once("Database.php");

    $db = new Database();
    $conn = $db->connect();

    $sql = "SELECT * FROM Customer";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'>";
        echo "<tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>State</th>
              </tr>";
        
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . $row["First_name"] . "</td>
                    <td>" . $row["Last_name"] . "</td>
                    <td>" . $row["email"] . "</td>
                    <td>" . $row["Address"] . "</td>
                    <td>" . $row["State"] . "</td>
                  </tr>";
        }
        echo "</table>";
    } else {
        echo "No results";
    }
    
    $conn->close();

    ?>

  <!-- Load the JS file -->
  <script src="scripts/reports.js"></script> 
</body>

</html>