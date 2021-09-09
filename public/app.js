// require('dotenv').config()

// const { map } = require("leaflet");

    let input = document.getElementById('input')
    let mapContainer = document.getElementById('mapid')
    let ip;
    var api_key = '';
    let ipDiv = document.getElementById('ip')
    let ispDiv = document.getElementById('isp')
    let regionDiv = document.getElementById('region')
    let cityDiv = document.getElementById('city')

 
    const ipSearch = (ip) => {

        $(function () {
            $.ajax({
                url: "https://geo.ipify.org/api/v1",
                data: {apiKey: api_key, ipAddress: ip},
                success: function(data) {
                     let latitude = data.location.lat
                     let longitude = data.location.lng
                 //    $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
                    $("#ip").append(JSON.stringify(data.ip));
                    $("#isp").append(JSON.stringify(data.isp));
                    $("#region").append(JSON.stringify(data.location.region));
                    $("#city").append(JSON.stringify(data.location.city));
                    console.log(latitude)
     
     
     let map = L.map('mapid').setView([latitude, longitude], 13);

     input.addEventListener('change', ()=>{
        ipDiv.innerHTML = ''
        ispDiv.innerHTML = ''
        regionDiv.innerHTML = ''
        cityDiv.innerHTML = ''
        map.off();
        map.remove()
        ip = input.value
        console.log(ip)
        ipSearch(ip)
        })
     
     L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);  
                }
            });
         });   
     
    }
    ipSearch(ip)
 
   
