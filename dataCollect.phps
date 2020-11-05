<?php

if(isset($_GET['find'])) {

    $location = $_GET['city'];
    $locValue = strtolower($location);

    $jsonFile = file_get_contents("http://data.streetfoodapp.com/1.1/schedule/".$locValue."/");
    file_put_contents("trucktruck.txt", $jsonFile);

    ?>
<script type="text/javascript" src="js/script.js">

</script>

<?php }

?>
    