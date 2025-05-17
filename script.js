const url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function GetISS() {
    const res = await fetch(url)
    const data = await res.json();
    document.getElementById('lat').innerText = data.latitude
    document.getElementById('lon').innerText = data.longitude
}

// GetISS().catch(e => {
//     console.log(e)
// })

setInterval( () => GetISS(), 1000)