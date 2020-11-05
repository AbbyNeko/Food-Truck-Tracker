<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Assignment 03 Mashup – Carmela San Diego</title>
<link href="css/styles.css" type="text/css" rel="stylesheet">
</head>
<body>

<div class= "section group">
    <div class="col span_2_of_3" id="dancakes">
        <h1>What Food Trucks are open today?</h1>
        <form id="taco" method="get" name="taco">
        <label>Location:</label>
        <select id="city" name="city">
            <option>Eugene</option>
            <option>Tallahassee</option>
            <option>Boston</option>
            <option>Toronto</option>
        </select>   

        <input type="submit" value="Find Foodtrucks" name="find" id="find">
    </form>

    <div id="vendors"></div>
    </div>
</div>
    <hr>
    <div class="section group">
        <div class="col span_3_of_3">
            <footer>
            This is an educational assignment prepared for the <span><img src="img/ucfsvad.png" alt="ucf svad logo" width="62" height="15"></span> course DIG4503: Rapid App with Daniel Novatnak, Spring 2016. Not a commercial product.
            </footer>
        </div>
    </div>  
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <?php
    require('dataCollect.php');
?>

</body>
</html>