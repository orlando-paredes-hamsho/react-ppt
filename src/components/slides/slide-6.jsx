import React, { Component } from 'react';
import Highcharts from 'react-highcharts';

const config = {
    credits: {
      enabled: false
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor:"transparent"
    },
    title: {
        text:""
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            center: ["50%", "50%"],
            size:'100%',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Skills',
        data: [
            { name: '.Net', y: 40 },
            { name: 'Java/J2EE', y: 8 },
            { name: 'UI/UX', y: 5 },
            { name: 'Business Process Skills', y: 20 },
            { name: 'ETL', y: 3 },
            { name: 'Oracle', y: 3 },
            { name: 'Salesforce', y: 3 },
            { name: 'Sharepoint', y: 3 },
            { name: 'Sterling', y: 3 },
            { name: 'Selenium', y: 3 },
            { name: 'Android', y: 3 },
            { name: 'IOS', y: 3 },
            { name: 'Mainframe', y: 3 }
        ]
    }],
    legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'top',
        x: 0,
        y: 0
    }
};

class Slide6 extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (
            <div className="tcs-bg">
                <div className="tcs-bg-inner">
                    <h3 className="year fixed graph">Main Skillset</h3>
                    <Highcharts config={config}></Highcharts>
                </div>
            </div>
        );
    }
    
}

export default Slide6;