import React, { Component } from 'react';
import Highcharts from 'react-highcharts';

const config = {
    chart:{
        type:'column',
        backgroundColor:"transparent"
    },
    title:{
        text:""
    },
    xAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        lineColor:'transparent',
        title: {
                enabled: false
        },
        labels: {
           enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
                enabled: false
        },
        labels: {
           enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },
    plotOptions: {
        column: { animation: true }
    },
    series: [
        { type:'column', data: [6], color:'#fff', name:'Quality Assurance' },
        { type:'column', data: [3], color:'#000', name:'Dev'}
    ]
};

class Slide1 extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (
            <div style={{'width':'50%','position':'absolute','bottom':'0','left':'0'}}>
                <Highcharts config={config}></Highcharts>
            </div>
        );
    }
    
}

export default Slide1;