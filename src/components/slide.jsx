import React, { Component } from 'react';

class Slide extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        if( React.Children.count(this.props.children) === 0 ) return null;
        
        return (
            <div className={"slide-transition "+this.props.theme}>
                <div className="slide">
                    {this.props.children}
                </div>
            </div>
        );
    }
    
}

export default Slide;