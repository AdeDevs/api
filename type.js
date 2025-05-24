// async function GetWeather() {
//     const xAxis = []
//     const yJanuary = []
//     const yFebruary = []
//     const yMarch = []

//     const res = await fetch('nasa.csv')
//     const data = await res.text();
//     const table = data.split('\n').splice(1)
//     table.forEach(elt => {
//        const columns = elt.split(',')
//        const years = columns[0]
//        xAxis.push(years)
//        const january = columns[1]
//        yJanuary.push(january)
//        const february = columns[2]
//        yFebruary.push(february)
//        const march = columns[3]
//        yMarch.push(march)
//     })
//     return{xAxis, yJanuary, yFebruary, yMarch}
// }
// GetWeather()
// async function ChartIt() {
//     const show = document.getElementById('myChart').getContext('2d')
//     const data = await GetWeather();

//     const myChart = new Chart(show, {
//         type: 'line',
//         data: {
//             labels: data.xAxis,
//             datasets: [{
//                 label: 'January Temperature',
//                 data: data.yJanuary,
//                 fill: true,
//                 backgroundColor: 'rgba(255, 99, 133, 0.25)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 pointBackgroundColor: 'rgb(255, 99, 132)',
//                 pointBorderColor: '#fff',
//                 pointHoverBackgroundColor: '#fff',
//                 pointHoverBorderColor: 'rgb(255, 99, 132)'
//               },
//             {
//                 label: 'February Temperature', 
//                 data: data.yFebruary,
//                 fill: true,
//                 backgroundColor: 'rgba(0, 21, 255, 0.23)',
//                 borderColor: 'rgb(190, 99, 255)',
//                 pointBackgroundColor: 'rgb(0, 0, 0)',
//                 pointBorderColor: '#fff',
//                 pointHoverBackgroundColor: '#fff',
//                 pointHoverBorderColor: 'rgb(255, 99, 132)'
//             },{
//                 label: 'March Temperature', 
//                 data: data.yMarch,
//                 fill: true,
//                 backgroundColor: 'rgba(43, 255, 57, 0.23)',
//                 borderColor: 'hsl(186, 100.00%, 69.40%)',
//                 pointBackgroundColor: 'rgb(0, 0, 0)',
//                 pointBorderColor: '#fff',
//                 pointHoverBackgroundColor: '#fff',
//                 pointHoverBorderColor: 'rgb(255, 99, 132)'
//             },  
//         ],
//           },
//     })
// }
// ChartIt().catch(e => {
//     console.log(e)
// });

const attribution = { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }
const mapURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const map = L.map('myMap').setView([0, 0], 1);
const myIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [120, 95],
})
const marker = L.marker([0, 0], {icon: myIcon}).addTo(map)
L.marker([])
L.tileLayer(mapURL, attribution).addTo(map);

const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
async function GetISS() {
    const res = await fetch(apiUrl)
    const data = await res.json()
    console.log(data)

    document.getElementById('lat').textContent = (data.latitude)
    document.getElementById('lon').textContent = (data.longitude)

    const {latitude, longitude, altitude} = data;
    console.log(altitude)
    
    marker.setLatLng([latitude, longitude])
    map.setView([latitude, longitude], 3)
    
}


setInterval(() => GetISS(), 3000)