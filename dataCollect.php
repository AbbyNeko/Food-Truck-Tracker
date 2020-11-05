<?php

    

if(isset($_POST['find'])) {
$location = $_POST['city'];
    if($location === "Please Select a City") {
    	print("Please select a valid option!");
    }

    else{
    $locValue = strtolower($location);


    $jsonFile2 = file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=".$locValue."&units=metric&appid=8c7131851b168c01d97fe8bda3b05ed8");
    $jsonFile = file_get_contents("http://data.streetfoodapp.com/1.1/schedule/".$locValue."/");
    file_put_contents("trucktruck.txt", $jsonFile);
    file_put_contents("weather.txt", $jsonFile2);

    ?>
<script type="text/javascript" src="js/script.js">

</script>

<?php }
}
?>
    