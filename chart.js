// const ctx = document.getElementById('myChart').getContext('2d');
// const xlabels = []
// const ylabels = []

// GetChart();

// async function GetChart() {
//     await GetData()
//     const myChart = new Chart(ctx, {
//         type: 'line', // 'line', 'pie', 'doughnut', etc.
//         data: {
//             labels: xlabels,
//             datasets: [{
//                 label: 'Global Means of Temperature',
//                 data: ylabels,
//                 backgroundColor: 'yellow',
//                 borderColor: ['green'],
//                 borderWidth: 1
//             }]
//         },
//     });
// }

// async function GetData() {
//     const res = await fetch('nasa.csv')
//     const data = await res.text()
//     const table = data.split('\n').splice(1)

//     table.forEach(info => {
//         const columns = info.split(',')
//         const year = columns[0]
//         xlabels.push(year)
//         const means = columns[1]
//         ylabels.push(parseFloat(means) + 14)
//     })
// }