const url = 'https://api.wheretheiss.at/v1/satellites/25544'

async function GetISS() {
    const res = await fetch(url)
    const data = await res.json();
    const {latitude, longitude} = data;
    document.getElementById('lat').innerText = data.latitude
    document.getElementById('lon').innerText = data.longitude

    marker.setLatLng([longitude, latitude]).addTo(mymap)
}
setInterval( () => GetISS(), 2000)