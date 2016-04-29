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
        { type:'column', data: [47], color:'#3F3F40', name:'Digital & ECM', visible: false  },
        { type:'column', data: [45], color:'#fff', name:'QA', visible: false },
        { type:'column', data: [6], color:'#467408', name:'EDA', visible: false }
    ]
};

class Slide1 extends Component {
hideHandler(){

 if(this.state.ul1 == 'open'){
     this.state.ul1 = 'close';
     this.forceUpdate();
 }else if(this.state.ul1 == 'close'){
     this.state.ul1 = 'open';
     this.forceUpdate();
 }
 this.forceUpdate();
}  
hideHandler2(){
 if(this.state.ul2 == 'open'){
     this.state.ul2 = 'close';
     this.forceUpdate();
 }else if(this.state.ul2 == 'close'){
     this.state.ul2 = 'open';
     this.forceUpdate();
 }
 this.forceUpdate();
} 
    constructor(props){
        super(props);
        this.state = {ul1:'close',ul2:'close'};    }
    
    render(){
        
        return (
            <div className="row">
                <div className="left side">
                    <h3 className="year" >2015</h3>
                    <div className="main-section left">
                        <Highcharts config={config}></Highcharts>
                    </div>
                </div>
                
                <div className="right side">
                    <div className="list-content">
                        <h3 className="list header blue" onClick={this.hideHandler.bind(this)}>Project Delivered</h3>
                        <ul className={this.state.ul1}>

                            <li>Mobile Service Locator, Apple Pay</li>
                            <li>UDP ADA Automation</li>
                            <li>Cross cosa - Enterprise Digital Packagin</li>
                            <li>EMM PEP+ Enhancements</li>
                            <li>Account Summary Enhancements</li>
                        </ul>
                        <h3 className="list header light" onClick={this.hideHandler2.bind(this)}>Highlights</h3>
                        <ul className={this.state.ul2}>
                            <li>Started Dotcom, MSR Lab development</li>
                            <li>Cross Skilling on iOS, Android, Adaptative Web</li>
                            <li>Complete ownership of Mobile and ECT Dev</li>
                             <li>1 CIO Quality Cup</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Slide1;