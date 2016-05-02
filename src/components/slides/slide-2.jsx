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
        { type:'column', data: [9], color:'#3F3F40', name:'Quality Assurance', visible: false  },
        { type:'column', data: [12], color:'#21ABE8', name:'Dev', visible: false }
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
        this.state = {ul1:'close',ul2:'close'};    }
    
    render(){
        
        return (
            <div className="row inverse">
                <div className="left side">
                    <h3 className="year" >2014</h3>
                    <div className="main-section left">
                        <Highcharts config={config}></Highcharts>
                    </div>
                </div>
                
                <div className="right side">
                    <div className="list-content">
                       
                        <h3 className="list header black" onClick={()=>{this.hideHandler(1)}}>Project Delivered</h3>
                        <ul className={this.state.ul1}>

                            <li>Social Listening and Response</li>
                            <li>Messaging HUB and Preferences</li>
                            <li>ECT Authoring Tool Enhancements</li>
                            <li>Separation Assessment Tool-Returning Warrior</li>
                        </ul>
                        <h3 className="list header light" onClick={()=>{this.hideHandler(2)}}>Highlights</h3>
                        <ul className={this.state.ul2}>
                            <li>Focused training on iOS & Android for a batch of 8</li>
                            <li>started Native Mobile, ECT Development, EMM</li>
                            <li>100% - ECT Runaway Support from GDL</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Slide1;