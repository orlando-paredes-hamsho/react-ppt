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
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100
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
        column: { animation: true },
    },
    series: [
        { type:'column', data: [6], color:'#000', name:'Quality Assurance' },
        { type:'column', data: [3], color:'#fff', name:'Dev'}
    ]
};

class Slide1 extends Component {
hideHandler(){
 if(this.state.classShow == 'open'){
     this.state.classShow = 'close';
     this.forceUpdate();
 }else if(this.state.classShow == 'close'){
     this.state.classShow = 'open';
     this.forceUpdate();
 }
 this.forceUpdate();
}    
    constructor(props){
        super(props);
        this.state = {classShow:'open'};
    }
    
    render(){
        
        return (
            <div className="row">
                <div className="left side">
                    <h3 className="year" >2010-13</h3>
                    <div className="main-section left">
                        <Highcharts config={config}></Highcharts>
                    </div>
                </div>
                
                <div className="right side">
                    <div className="list-content">
                        <h3 className="list header blue" onClick={this.hideHandler.bind(this)}>Project Delivered</h3>
                        <ul className={this.state.classShow} ref={(ref) => this.firstUl = ref}>
                            <li>Member Stories and Poll</li>
                            <li>Ask USAA Financial Advice Community</li>
                            <li>Introduce New Social Communities</li>
                            <li>Collect Social Media Profile on Mobile</li>
                        </ul>
                        <h3 className="list header light">Highlights</h3>
                        <ul>
                            <li>Start Social Media Development</li>
                            <li>Development Started with 3 Member Team</li>
                            <li>GDL Mobile Lab Inaugurated in 2012</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Slide1;