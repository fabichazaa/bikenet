var map = L.map('main_map').setView([-34.437048, -58.788649], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/coypright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.437048, -58.788649]).addTo(map);
L.marker([-34.438335, -58.792286]).addTo(map);
L.marker([-34.439019, -58.789116]).addTo(map);