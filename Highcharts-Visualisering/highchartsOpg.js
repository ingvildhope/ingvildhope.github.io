var chart = Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Highcharts responsive chart'
    },

    subtitle: {
        text: 'Resize the frame or click buttons to change appearance'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },
    
    xAxis: {
        categories: ['1991', '2000', '2018', '2019'],
        labels: {
            x: -10
        }
    },
    
    yAxis: {
        allowDecimals: false,
        title: {
            text: '… ulike medier en gjennomsnittsdag (9-79 år)'
        }
    },
    series: [{
        name: 'Papiravis',
        data: [84, 77, 30, 27]
    }, {
        name: 'Fjernsyn',
        data: [81, 82, 60, 48]
    }, {
        name: 'Internett',
        data: [0, 27, 91, 90]
    }, {
        name: 'Radio',
        data: [71, 57, 50, 48]
    }],
   
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});

document.getElementById('small').addEventListener('click', function () {
    chart.setSize(400);
});

document.getElementById('large').addEventListener('click', function () {
    chart.setSize(600);
});

document.getElementById('auto').addEventListener('click', function () {
    chart.setSize(null);
});

