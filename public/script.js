timeCalculations();

function myFunction(){
    let lat = document.getElementById("lat").value;
    let long = document.getElementById("long").value;

    var requestOptions = {
        method: 'GET',
    };

    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=9f620a7cb3fe481c8cded3768af01b8b`, requestOptions)
        .then(response => response.json())
        .then(result => {
        displayLocation(result.features[0].properties.city, result.features[0].properties.country)
        })
        .catch(error => console.log('error', error));   

    function displayLocation(city, country){
        let loc = city + ", " + country;
        console.log(loc)

        let location = document.getElementById("location");
        location.innerHTML = `<p>You live in <b>${loc}</b></p>`               
        let map = document.getElementById("map");
        let url = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:-96.267907,37.285851&zoom=2.7312&marker=lonlat:${long},${lat};type:material;color:%23ff3421;icontype:awesome&apiKey=9f620a7cb3fe481c8cded3768af01b8b`;
        map.innerHTML = `<img src=${url} alt=""/>`
    }

}

function timeCalculations(){
    var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let DAYS = " Days ";
        let HOURS = " Hours ";
        let MINUTES = " Minutes ";
        let SECONDS = " Seconds ";
        
        if(days==1){
            DAYS = " Day ";
        }
        if(hours==1){
            HOURS = " Hour ";
        }
        if(minutes==1){
            MINUTES = " Minute ";
        }
        if(seconds==1){
            SECONDS = " Second ";
        }    

    //document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
    document.getElementById("Days").innerHTML = days;
    document.getElementById("DaysUnits").innerHTML = DAYS;
    
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("HoursUnits").innerHTML = HOURS;

    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("MinutesUnits").innerHTML = MINUTES;

    document.getElementById("Seconds").innerHTML = seconds;
    document.getElementById("SecondsUnits").innerHTML = SECONDS;
    // If the count down is finished, write some text

    if (distance <= 1) {
        clearInterval(x);
        document.getElementById("Days").innerHTML = "0";
        document.getElementById("Hours").innerHTML = "0";
        document.getElementById("Minutes").innerHTML = "0";
        document.getElementById("Seconds").innerHTML = "0";
    }
    
    }, 1000);
}