import React, { Component } from 'react';
import Highcharts from 'react-highcharts';

const config = {
    chart:{
        type:'column',
        backgroundColor:"transparent"
    },
    title:{
        text:"My Chart"
    },
    xAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        lineColor:'transparent',
        title: {
                enabled: false
        }
    },
    yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
                enabled: false
        }
    },
    plotOptions: {
        column: { animation: true }
    },
    series: [
        { type:'column', data: [6], color:'#fff', label:'Assurance' },
        { type:'column', data: [3], color:'#000' }
    ]
};

class Slide1 extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (
            <div style={{'width':'50%'}}>
                <Highcharts config={config}></Highcharts>
            </div>
        );
    }
    
}

export default Slide1;