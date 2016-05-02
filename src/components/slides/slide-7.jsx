import React, { Component } from 'react';

class Slide7 extends Component{
    
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return(
        <div className="center">
        
           <div className="data-row">
                Board of Directors Deliverables
                <div className="number">5</div>
           </div>
           
           <div className="data-row">
                Strategic Efforts
                <div className="number">4</div>
           </div>
           
           <div className="data-row">
                Projects Delivered form Guadalajara
                <div className="number">30+</div>
           </div>
           
           <div className="data-square">
                <ul>
                    <li>Apple pay integration</li>
                    <li>Integrated Money Movement (IMM) </li>
                    <li>Social incentives</li>
                </ul>
           </div>
           
        </div>
        );  
    }
}


export default Slide7;