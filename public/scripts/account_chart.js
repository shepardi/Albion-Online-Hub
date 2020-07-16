


// Getting Data from api
const urlFind = "https://gameinfo.albiononline.com/api/gameinfo/search?q=";
const urlStats = "https://gameinfo.albiononline.com/api/gameinfo/players/";
chartData = [];

let username = "EatRainbows"

const url = urlFind + username;

// fetch(url)
//     .then((response) => response.json())
//     .then(function () {
//         // Create and append the data
//         console.log(response);
//     });


var ctx = document.getElementById('accountChart');

var myChart = new Chart(ctx, {
    type: 'pie',

    data: {
        // labels: ['24hr', '18hr', '14hr', '10hr', '6hr', '2hr', '<1hr'],
        datasets: [{
            label: 'Gathering Fame',
            data: [53186, 4356162, 388252, 146660, 138207, 53186],
            backgroundColor: [
                'rgb(255,99,132)',
                'rgb(215,225,215)',
                "rgb(75,192,192)",
                'rgb(53,162,235)',
                'rgb(255,205,86)',
            ],
        }],

        labels: [
            'Wood Gathering',
            'Ore Gathering',
            'Fiber Gathering',
            'Hide Gathering',
            'Rock Gathering',
            'Wood Gathering',
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Gathering Fame',
            fontColor: 'rgb(33,38,41)',
        }

    }
});