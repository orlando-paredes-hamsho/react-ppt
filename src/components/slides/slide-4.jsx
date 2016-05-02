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
        { type:'column', data: [50], color:'#3F3F40', name:'Digital & ECM', visible: false },
        { type:'column', data: [9], color:' #467408', name:'QA', visible: false },
        { type:'column', data: [50], color:'#21ABE9', name:'EDA', visible: false }
    ]
};

class Slide1 extends Component {
hideHandler(handler){
   if(this.state["ul"+handler] == 'close'){
       this.setState({["ul"+handler]:'open'});
   }
   else if(this.state["ul"+handler] == 'open'){
       this.setState({["ul"+handler]:'close'});
   }
}
    constructor(props){
        super(props);
        this.state = {ul1:'close',ul2:'close',ul3:'close'};    }
    
    render(){
        
        return (
            <div className="row inverse">
                <div className="left side">
                    <h3 className="year" >2016</h3>
                    <div className="main-section left">
                        <Highcharts config={config}></Highcharts>
                    </div>
                </div>
                
                <div className="right side">
                    <div className="list-content">
                        <h3 className="list header black" onClick={()=>{this.hideHandler(1)}}>Project Delivered</h3>
                        <ul className={this.state.ul1}>

                            <li>IMM</li>
                            <li>Mobile Next</li>
                            <li>Car Journey Hub</li>
                            <li>Ent - BI(ADR, UDA Retirment)</li>
                           
                        </ul>
                        <h3 className="list header light" onClick={()=>{this.hideHandler(2)}}>Highlights</h3>
                        <ul className={this.state.ul2}>
                            <li>Inaugurated BI Lab in TCS facility</li>
                            <li>ONE-Enterprise team</li>
                            <li>EMM Wolf-pack @ Nearshore</li>
                             <li>1 CIO Quality Cup</li>
                             <li>De-centralized BI Lab operations across LOBs</li>
                        </ul>
                        <h3 className="list header green" onClick={()=>{this.hideHandler(3)}}>Focus & Priorities</h3>
                        <ul className={this.state.ul3}>
                            <li>Data Governance</li>
                            <li>MSR & PACO</li>
                            <li>DSI Engagements</li>
                             <li>Adoption of New Web Technologies</li>
                             <li>Newer methodologies of Agile</li>
                             <li>Up-skilling of QA resources</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Slide1;