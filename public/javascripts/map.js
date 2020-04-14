var map = L.map('main_map').setView([-34.437048, -58.788649], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/coypright">OpenStreetMap</a> contributors'
}).addTo(map);


$.ajax({
    dataType: "json",
    url: "api/bikes",
    success: function(result){
        console.log(result);
        result.bikes.forEach(function(bike){
        L.marker(bike.location,{title: bike.id}).addTo(map);
        });
    }
})