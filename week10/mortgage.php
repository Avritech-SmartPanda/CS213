
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" rel="stylesheet" href="./styles.css">
    <title>My PHP page</title>
</head>

<body>
    <div id="box">
        <h1>Mortgage Calculator</h1>
        <p>APR: <?php echo $_GET['apr'] . "%" ?> </p>
        <p>Term: <?php echo $_GET['term'] . " years" ?> </p>
        <p>Amount: $<?php echo $_GET['amount'] ?> </p>
        <p>
            <?php
            function calculate($apr, $term, $amount)
            {
                $payment = $amount;
                for ($i = 0; $i < $term; $i++) {
                    $payment = $amount * $apr / 100 + $amount;
                }
                return $payment;
            }
            echo "Your payment amount is: $" . calculate($_GET['apr'], $_GET['term'], $_GET['amount']);
            ?></p>
    </div>
</body>

</html>