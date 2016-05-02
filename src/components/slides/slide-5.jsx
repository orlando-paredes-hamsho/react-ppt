import React, { Component } from 'react';

class Slide5 extends Component{
    hideHandler(handler){
   if(this.state["ul"+handler] == 'close'){
       this.setState({["ul"+handler]:'go'});
   }
   else if(this.state["ul"+handler] == 'go'){
       this.setState({["ul"+handler]:'close'});
   }
}  
    
    constructor(props)
    {
        super(props);
        this.state = {ul1:'close',ul2:'close',ul3:'close',ul4:'close',ul5:'close',ul6:'close',ul7:'close',ul8:'close'};
    }
    
    render(){
        return(
            <div className="row">  

                <div className="left side">
                    <h3 className="year">Some Facts</h3>
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(1)}}>
                            <div className="circle small">
                                 <span>5</span>
                            </div>
                        </div>
                        <div className={this.state.ul1+" data-circle"}>
                            Years of Operations in LATAM
                        </div>
                    </div>
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(2)}}>
                              <div className="circle small">
                                 <span>109</span>
                            </div>
                        </div>
                         <div className={this.state.ul2+" data-circle"}>
                            Total Headcount
                        </div>
                    </div>
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(3)}}>
                              <div className="circle small">
                                 <span>4</span>
                            </div>
                        </div>
                         <div className={this.state.ul3+" data-circle"}>
                            Areas (Dev,QA,M&P,NACC)
                        </div>
                    </div>
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(4)}}>
                              <div className="circle small">
                                 <span>11</span>
                            </div>
                        </div>
                        
                         <div className={this.state.ul4+" data-circle"}>
                            Nearshore teams
                        </div>
                    </div>
                    
                </div>
                <div className="right side">
                 <h3 className="year">&nbsp;</h3>
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(5)}}>
                              <div className="circle small inverted">
                                 <span>75%</span>
                            </div>
                        </div>
                         <div className={this.state.ul5+" data-circle inverted"}>
                            Local Talent Leverage
                        </div>
                    </div> 
                    
                     <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(6)}}>
                              <div className="circle small inverted">
                                 <span>5</span>
                            </div>
                        </div>
                         <div className={this.state.ul6+" data-circle inverted"}>
                            BPO Skilled Associates
                        </div>
                    </div>
                    
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(7)}}>
                              <div className="circle small inverted">
                                 <span>30%</span>
                            </div>
                        </div>
                         <div className={this.state.ul7+" data-circle inverted"}>
                            Niche Technologies in industry
                        </div>
                    </div>
                    
                    <div className="content-circle">
                        <div className="circle" onClick={()=>{this.hideHandler(8)}}>
                              <div className="circle small inverted">
                                 <span>50%</span>
                            </div>
                        </div>
                         <div className={this.state.ul8+" data-circle inverted"}>
                            Technical Certified
                        </div>
                    </div>
                   
                </div>
            </div>
        );  
    }
}


export default Slide5;