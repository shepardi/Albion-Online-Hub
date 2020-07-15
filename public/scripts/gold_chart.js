
var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['24hr', '18hr', '14hr', '10hr', '6hr', '2hr', '<1hr'],
        datasets: [{
            label: 'Gold Value',
            data: [2300, 2340, 2390, 2212, 2090, 2900, 2300],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Gold Market',
            fontColor: 'rgb(33,38,41)',
        },
        legend: {
            display: false,

        },
        elements: {
            line: {
                backgroundColor: 'rgba(155,155,151,0.6)',
                borderColor: 'rgb(83,22,5)',
                borderWidth: 2,
                lineTension: 0.2,
                fill: false,
            },
            point: {
                borderColor: 'rgb(31,24,30)',
                backgroundColor: 'rgb(230, 164, 55)',
                borderWidth: 1,
                radius: 4,
            }
        },
        scales: {
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Silver Value",
                    fontColor: 'rgb(33,38,41)',
                },
                ticks: {
                    fontColor: 'rgb(33,38,41))',
                    maxTicksLimit: 7,
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'rgb(33,38,41))',
                }
            }]
        },
        responsive: true,

    }
});