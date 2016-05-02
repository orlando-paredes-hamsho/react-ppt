import React, { Component } from 'react';

class Slide5 extends Component{
    
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return(
            <div className="row">  

                <div className="left side">
                    <h3 className="year facts">Some Facts</h3>
                    <div className="content-circle">
                        <div className="circle">
                            <div className="circle small">
                                 <span>5</span>
                            </div>
                        </div>
                        <div className="data-circle">
                            Years of Operations in LATAM
                        </div>
                    </div>
                    <div className="content-circle">
                        <div className="circle">
                              <div className="circle small">
                                 <span>109</span>
                            </div>
                        </div>
                         <div className="data-circle">
                            Total Headcount
                        </div>
                    </div>
                    <div className="content-circle">
                        <div className="circle">
                              <div className="circle small">
                                 <span>4</span>
                            </div>
                        </div>
                         <div className="data-circle">
                            Areas (Dev,QA,M&P,NACC)
                        </div>
                    </div>
                    <div className="content-circle">
                        <div className="circle">
                              <div className="circle small">
                                 <span>11</span>
                            </div>
                        </div>
                        
                         <div className="data-circle">
                            Nearshore teams
                        </div>
                    </div>
                    
                </div>
                <div className="right side">
                 <h3 className="year facts">&nbsp;</h3>
                    <div className="content-circle">
                        <div className="circle">
                              <div className="circle small inverted">
                                 <span>75%</span>
                            </div>
                        </div>
                         <div className="data-circle inverted">
                            Local Talent Leverage
                        </div>
                    </div> 
                    
                     <div className="content-circle">
                        <div className="circle">
                              <div className="circle small inverted">
                                 <span>5</span>
                            </div>
                        </div>
                         <div className="data-circle inverted">
                            BPO Skilled Associates
                        </div>
                    </div>
                    
                    <div className="content-circle">
                        <div className="circle">
                              <div className="circle small inverted">
                                 <span>30%</span>
                            </div>
                        </div>
                         <div className="data-circle inverted">
                            Niche Technologies in industry
                        </div>
                    </div>
                    
                    <div className="content-circle">
                        <div className="circle">
                              <div className="circle small inverted">
                                 <span>50%</span>
                            </div>
                        </div>
                         <div className="data-circle inverted">
                            Technical Certified
                        </div>
                    </div>
                   
                </div>
            </div>
        );  
    }
}


export default Slide5;