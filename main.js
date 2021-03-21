const map = L.map('map').setView([41.9, 12.46], 6);

const address = L.popup({
    className: "popup-address",
}).setLatLng([42, 12.46])
    .setContent('<p>All roads lead to Rome</p>')
    .openOn(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

