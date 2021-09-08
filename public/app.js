// require('dotenv').config()

    var ip = "7.8.8.8";
    // var api_key = process.env.API_KEY;
    // console.log(process.env)

    let input = document.getElementById('input')
    let mapContainer = document.getElementById('mapid')
  
    const ipSearch = () => {

        $(function () {
            $.ajax({
                url: "https://geo.ipify.org/api/v1",
                data: {apiKey: api_key, ipAddress: ip},
                success: function(data) {
                     let latitude = data.location.lat
                     let longitude = data.location.lng
                 //    $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
                    $(".ip").append(JSON.stringify(data.ip));
                    $(".isp").append(JSON.stringify(data.isp));
                    $(".region").append(JSON.stringify(data.location.region));
                    $(".city").append(JSON.stringify(data.location.city));
                    console.log(latitude)
     
     
     var map = L.map('mapid').setView([latitude, longitude], 13);
     
     L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
     
     L.marker([latitude, longitude]).addTo(map)
         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
         .openPopup();
     
     
                }
            });
         });
    }

    input.addEventListener('change', ()=>{
        if(mapContainer.hasAttribute('.leaflet-container')){
            mapContainer.removeAttribute('mapid')
        }
        ip = input.value
        console.log(input.value)
        ipSearch()
    })