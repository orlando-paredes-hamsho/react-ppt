import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlideShow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        if( React.Children.count(this.props.children) === 0 ) return null;
        
        return (
            <div className="slideShow">
                {(React.Children.count(this.props.children) > 1) ? this.props.children[this.props.currentSlide] : this.props.children}
            </div>
        );
    }
    
}

function mapStateToProps ({currentSlide}){
    return{
        currentSlide
    }
}

export default connect(mapStateToProps)(SlideShow);