<?php
$firstname = $_POST["first_name"];
$lastname = $_POST["last_name"];
$address = $_POST["address"];
$phone = $_POST["phone"];
$total = $_POST["total"];
$cardType = $_POST["card"];
$creditCard = $_POST["credit_card"];
$expDate = $_POST["exp_date"];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="./styles.css">
    <title>PHP Confirmation</title>
</head>

<body>
    <form class="calcForm" id="myForm" action="assign11_a.php">
        <h2>Order confirmation:</h2>
        <p><strong>Customer Details:</strong><br>
            <?php
            echo $firstname . " " . $lastname . "<br>" . $phone . "<br>" . $address;
            ?>
        </p>
        <p><strong>Order Details:</strong><br>
            <?php
            foreach ($_POST["item"] as $item) {
              echo $item. "<br>\n";
                
            }
            
             echo "Total: " . $total;
            ?>
        </p>
        <p><strong>Payment Method:</strong><br>
            <?php 
                echo $cardType . "<br>";
                echo "Expires: " . $expDate;
            ?></p>
        <input type="submit" class="btn" name="confirm" value="Confirm">
        <input type="submit"  class="btn" name="cancel" value="Cancel">
    </form>
</body>

</html>