import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SlideShow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        if( React.Children.count(this.props.children) === 0 ) return null;
        
        return (
            <div className="slideShow">
                {this.props.children}
            </div>
        );
    }
    
}

export default SlideShow;