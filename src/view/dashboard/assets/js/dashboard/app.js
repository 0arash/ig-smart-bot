var xyValues = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 80, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
    { x: 110, y: 10 },
    { x: 120, y: 11 },
    { x: 130, y: 14 },
    { x: 140, y: 14 },
    { x: 150, y: 15 }
];

new Chart("myChart", {
    
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Income",
                borderColor: "#FF55BF",
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: "#ffffff",
                pointHoverBorderColor: "#FF55BF",
                pointBorderWidth: 4,
                pointRadius: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 4,
                fill: false,
                borderWidth: 4,
                data: [1000, 1400, 1000, 1900, 1200, 1300, 1000, 1600, 1000, 1700, 1000, 600]
            },
            {
                label: "Expense",
                borderColor: "#605BFF",
                pointBorderColor: "transparent",
                pointBackgroundColor: "transparent",
                pointHoverBackgroundColor: "#ffffff",
                pointHoverBorderColor: "#605BFF",
                pointBorderWidth: 4,
                pointRadius: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 4,
                fill: false,
                borderWidth: 4,
                data: [500, 800, 300, 800, 600, 800, 600, 500, 900, 600, 700, 200]
            }]
        },
        options: {
            legend: {
                display: false,
                position: "top",
                align: "center",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        fontFamily: "Inter', sans-serif",
                        fontColor: '#C2C2DD',
                        fontSize: 15,
                        beginAtZero: true,
                    },
                    gridLines: {
                        zeroLineBorderDash: [5],
                        zeroLineWidth: 1,
                        zeroLineColor: "#F0F0F5",
                        drawTicks: false,
                        display: true,
                        color: "#F0F0F5",
                        borderDash: [5],
                        lineWidth: 1,
                    }

                }],
                xAxes: [{
                    ticks: {
                        fontFamily: "Inter', sans-serif",
                        beginAtZero: true,
                        fontColor: '#C2C2DD',
                        fontSize: 15,
                        padding: 20
                    },
                    gridLines: {
                        zeroLineWidth: 1,
                        zeroLineBorderDash: [5],
                        zeroLineColor: "#F0F0F5",
                        drawTicks: false,
                        display: true,
                        color: "#F0F0F5",
                        borderDash: [5],
                        lineWidth: 1,
                    },
                }]
            },
            tooltips: {
                labelColor: "red",
                callbacks: {
                    label: function (tooltipItem) {
                        return "$" + Number(tooltipItem.yLabel);
                    }
                }
            },
        }
    });  