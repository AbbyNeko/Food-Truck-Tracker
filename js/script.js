
$(document).ready(function() {

    $.getJSON("trucktruck.txt",function(json) {

        //console.dir(json);
        returnstring = '<br/><br/>';

        for (var obj in json.vendors) {
          if (json.vendors.hasOwnProperty(obj)) {
            var vendor = json.vendors[obj];
            console.log(vendor);
            if (vendor.open.length > 0){

                if(vendor.name != null) {
                returnstring = returnstring + '<strong>' + vendor.name + '</strong><br/>';
                }

                else {
                    vendor.name == "Information Not Available";
                }

                if(vendor.description != null) {
                returnstring = returnstring + vendor.description + '<br/>';
                }
                else {
                    vendor.description == "Information Not Available";
                }

                if(vendor.phone != null) {
                returnstring = returnstring + vendor.phone + '<br/>';
                }
                else {
                    vendor.phone ==  "Information Not Available";
                }

                if(vendor.rating != null) {
                returnstring = returnstring + 'rating: ' + vendor.rating + '<br/>';
                }
                else {
                    vendor.rating ==  "Information Not Available";
                }


                if(vendor.open[0].latitude != null) {
                returnstring = returnstring + 'lat: ' + vendor.open[0].latitude + '<br/>';
                }
                else {
                    vendor.open[0].latitude ==  "Information Not Available";
                }

                if(vendor.open[0].longitude != null) {
                returnstring = returnstring + 'lon: ' + vendor.open[0].longitude + '<br/><br/>';
                }
                else{
                    vendor.open[0].longitude ==  "Information Not Available";
                }


            }
          }
        }

        $('#vendors').html(returnstring);
        
    });

$.getJSON("weather.txt", function(json2){
                //console.dir(json2);
                $("#weather1").text(''+ json2.main.temp+'&deg;C');
                $("#weather2").text(''+ json2.name);
                $("#weather3").text(''+json2.weather[0].description);

                    if (json2.weather[0].description == 'clear sky') {
                        $('#weather4').text("Looks like a wonderful day to go food trucking. ");
                    }
                    else if (json2.weather[0].description == 'mist'){
                        $('#weather4').text("Mist? Be careful out there. Don't go alone. Take this. Follow the light of our food trucks~");
            
                    } 
                    else if (json2.weather[0].description == 'fog'){
                        $('#weather4').text("Fog? Be careful...? Don't Drive Alone..? A Food Truck is out there to help you get through all that stressful driving.");
                    
                    } 
                    else if (json2.weather[0].description == 'haze'){
                        $('#weather4').text("There is a haze out in the distance. Bring your money and eat at a food truck anyways :)");
                   
                    } 
                    else if (json2.weather[0].description == 'rain'){
                        $('#weather4').text("As Robin Scherbatsky says, rain is Golfing weather but bring your umbrella for food truck day anyways.");
                   
                    } 
                    else if (json2.weather[0].description == 'drizzle'){
                        $('#weather4').text("Go out. Feel the drizzle. Have a taco at some food truck.");
                    
                    } 
                    else if (json2.weather[0].description == 'light rain'){
                        $('#weather4').text("Maybe bring an umbrella..? But food truck is only a foot away....Run through that light rain, my son.");
                   
                    } 
                    else if (json2.weather[0].description == 'moderate rain'){
                        $('#weather4').text("This rain might really mess up your hair and result in running mascara if you're a girl with makeup. Please bring an umbrella and have some good ole' food truck food.");
                    
                    } 
                    else if (json2.weather[0].description == 'shower rain'){
                        $('#weather4').text("Perhaps a sturdier umbrella may be needed to traverse to support your fellow food truck businesses.");
                    
                    } 
                    else if (json2.weather[0].description == 'thunderstorm'){
                        $('#weather4').text("Food truck businesses shall bless you if you make it through this weather. Maybe food trucks should consider giving discounts whenever weather like this comes up.");
                    
                    } 
                    else if (json2.weather[0].description == 'broken clouds'){
                        $('#weather4').text("Broken Clouds? But your wallet ain't broken so bring your appetite.");
                    
                    } 
                    else if (json2.weather[0].description == 'scattered clouds'){
                        $('#weather4').text("Still sounds like a good idea to eat at a food truck and have it to-go just in case.");
                    
                    } 
                    else if (json2.weather[0].description == 'few clouds'){
                        $('#weather4').text("There's just a few clouds, eh? No harm done. To-go it is.");
                    
                    } 
                    else if (json2.weather[0].description == 'overcast clouds'){
                        $('#weather4').text("Dark clouds don't stop me. But having no food does so come by a local food truck while it's not raining.");
                    
                    } 
                    else if (json2.weather[0].description == 'snow'){
                        $('#weather4').text("Do you wanna build a snowman? Or have a bite around a truck? I never see you anymore. Come out the door. It's like you've gone away!");
                   
                    } 
                    else if (json2.weather[0].description == 'light snow'){
                        $('#weather4').text("A light snowy day. A beautiful day to be outside and SUPPORT YOUR LOCAL FOOD TRUCK BUSINESSS! YAAAAH!");
                    
                    } 
                    else if (json2.weather[0].description == 'heavy snow'){
                        $('#weather4').text("Winter is coming.");
                    
                    } 
                    else if (json2.weather[0].description == 'windy'){
                        $('#weather4').text("Battle the wind! Be there today! It's not hot at all outside.");
                    
                    } 
                    else {
                    
                    $('#weather4').text("My teeth and ambitions are bared! Be prepaaared! <br> -Mufasa");                
                }

                });



}); //end