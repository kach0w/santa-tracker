import React from 'react';

function App() {
    let lat = document.getElementById("lat").value;
    let long = document.getElementById("long").value;
    
    
    var requestOptions = {
      method: 'GET',
    };
    
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=9f620a7cb3fe481c8cded3768af01b8b`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        displayLocation(result.features[0].properties.city, result.features[0].properties.country)
      })
      .catch(error => console.log('error', error));   
    
    function displayLocation(city, country){
      console.log(city)
      document.getElementById("city").innerHTML = city + ", " + country;
      // var img = document.createElement('img');
      // img.src = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=800&height=400&center=lonlat:-95.935964,39.098788&zoom=3&marker=lonlat:${long},${lat}&apiKey=9f620a7cb3fe481c8cded3768af01b8b`;
      // document.getElementById('body').appendChild(img);

    }

    return (
      <img src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=800&height=400&center=lonlat:-95.935964,39.098788&zoom=3&marker=lonlat:${long},${lat}&apiKey=9f620a7cb3fe481c8cded3768af01b8b`}/>
    )
    // const mapIsReadyCallback = (map) => {
    //   console.log(map);
    // };
  
    // return (
    //   <MyMap mapIsReadyCallback={mapIsReadyCallback}/>
    // );

}
export default App;
