import React, { Component } from 'react';

class Cover extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        return (
            <div className={"slide-transition cover"}>
                
                <div className={"cover-white"}>
                
                    <img src="./img/CoverBG_White.jpg" />
                
                    <h1 className={"cover-h1"}>Enterprise</h1>
                    <h2 className={"cover-h2"}>Journey in GDL</h2>
                </div>
                
                <div className={"cover-blue"}>
                
                </div>
                
                
            </div>
        );
    }
    
}

export default Cover;