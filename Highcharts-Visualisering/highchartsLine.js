var colors = Highcharts.getOptions().colors;

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },

    legend: {
        symbolWidth: 40
    },

    title: {
        text: 'Andel som har brukt ulike medier en gjennomsnittsdag (9-79 år)'
    },

    subtitle: {
        text: 'Kilde: Statisktisk sentralbyrå'  //legg inn ssb
    },

    yAxis: {
        title: {
            text: 'Prosent'
        },
        accessibility: {
            description: 'Percentage usage'
        }
    },

    xAxis: {
        title: {
            text: 'Årstall'
        },
        accessibility: {
            description: 'Tid fra 1991 til 2019'
        },
        categories: ['1991', '2000', '2018', '2019']
    },

    tooltip: {
        valueSuffix: '%'
    },
/* Dette gjør at linjene blir til linker, da må man også i serien si at de skal ha en webside: og linken til den
    plotOptions: {
        series: {
            point: {
                events: {
                    click: function () {
                        window.location.href = this.series.options.website;
                    }
                }
            },
            cursor: 'pointer'
        }
    },
    */
    series: [
        {
            name: 'Papiravis',
            data: [84, 77, 30, 27],
            color: colors[2],
        }, {
            name: 'Fjernsyn',
            data: [81, 82, 60, 48],
            dashStyle: 'ShortDashDot',
            color: colors[0]
        }, {
            name: 'Internett',
            data: [0, 27, 91, 90],
            dashStyle: 'ShortDot',
            color: colors[1]
        }, {
            name: 'Radio',
            data: [71, 57, 50, 48],
            dashStyle: 'Dash',
            color: colors[9]
        }, {
            name: 'Bøker',
            data: [24, 20, 24, 25],
            dashStyle: 'LongDashDotDot',
            color: colors[5]
        }, {
            name: 'Ukeblad',
            data: [21, 17, 5, 4],
            dashStyle: 'ShortDash',
            color: colors[3]
        }
    ],
    
    responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
                chart: {
                    spacingLeft: 3,
                    spacingRight: 3
                },
                legend: {
                    itemWidth: 150
                },
                xAxis: {
                    categories: ['1991', '2000', '2018', '2019'],
                    title: ''
                },
                yAxis: {
                    visible: false
                }
            }
        }]
    }
    });

/*    
    series: [
        {
            name: 'NVDA',
            data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
            website: 'https://www.nvaccess.org',
            color: colors[2],
            accessibility: {
                description: 'This is the most used screen reader in 2019'
            }
        }, {
            name: 'JAWS',
            data: [69.6, 63.7, 63.9, 43.7, 66.0, 61.7],
            website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
            dashStyle: 'ShortDashDot',
            color: colors[0]
        }, {
            name: 'VoiceOver',
            data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
            website: 'http://www.apple.com/accessibility/osx/voiceover',
            dashStyle: 'ShortDot',
            color: colors[1]
        }, {
            name: 'Narrator',
            data: [null, null, null, null, 21.4, 30.3],
            website: 'https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator',
            dashStyle: 'Dash',
            color: colors[9]
        }, {
            name: 'ZoomText/Fusion',
            data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
            website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
            dashStyle: 'ShortDot',
            color: colors[5]
        }, {
            name: 'Other',
            data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
            website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
            dashStyle: 'ShortDash',
            color: colors[3]
        }
    ],

*/