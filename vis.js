
//Sousse chart

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=sousse&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in Sousse for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var Sousse = new ApexCharts(document.querySelector("#soussechart"), options);
        Sousse.render();


    })





//California chart

fetch('https://api.openweathermap.org/data/2.5/forecast?q=california&appid=fd3150a661c1ddc90d3aefdec0400de4').then(response =>


        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },

            title: {
                text: "Temperature in California for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },


        };

        var chart= new ApexCharts(document.querySelector("#californiachart"), options);
        chart.render();


    })
//Paris Chart 

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in Paris for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   

            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                },

            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var paris = new ApexCharts(document.querySelector("#parischart"), options);
        paris.render();


    })

    //Mumbai Chart

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=ccdcde42aac18330ebc2ae7d06e30bf5').then(response =>

        response.json()

    ).then(response => {
        dates = response.list.map(list => {
            return list.dt_txt;
        });

        temps = response.list.map(list => {
            return list.main.temp;
        });


        var options = {
            series: [{
                name: 'Temp',
                data: temps,
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: "Temperature in Mumbai for every 3 hours",
                align: 'center',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '14px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '##263238'
                }
            },   
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                  },
                markers: {
                   colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            stroke: {
                curve: 'smooth'
            },

            xaxis: {
                type: 'time',
                
                categories: dates,
                
                time: {
                    parser: 'MM/DD HH:mm',
                    tooltipFormat: 'HH:mm',
                    unit: 'hour',
                    unitStepSize: 3,
                    displayFormats: {
                        'hour': 'MM/DD hA'
                    }
                }
            },

        };

        var mumbai = new ApexCharts(document.querySelector("#mumbaichart"), options);
        mumbai.render();


    })

    