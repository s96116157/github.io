$(function () {
    Load();
});

function Load() {
    console.log('TEST');
};


function getLocation() {
    var x = document.getElementById("map");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = document.getElementById("map");
    var y = document.getElementById("location");
    var n = position.coords.latitude.toFixed(7);
    var e = position.coords.longitude.toFixed(7);
    var latlon = n + "," + e;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    + latlon + "&zoom=18&size=600x450&markers=size:mid%7color:red%7Clabel:S%7C" + latlon;
    x.innerHTML = "<img src='" + img_url + "' style='display:block; margin: auto;'>";
    y.innerHTML = "" +
        "<ul style='list-style-type: none;'>" +
        "<li>座標位置</li>" +
        "<li>緯度：" + n + "</li>" +
        "<li>經度：" + e + "</li>" +
        "</ul>";
}