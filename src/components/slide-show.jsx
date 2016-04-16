import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Slide from './slide.jsx';

import { change_slide } from '../actions/index';

class SlideShow extends Component {
    
    constructor(props){
        super(props);
    }
    
    setCurrentSlide(slide){
        if(slide >= React.Children.count(this.props.children)){
            slide = 0;
        } else if (slide < 0) {
            slide = React.Children.count(this.props.children) + 1;
        }
        this.props.change_slide(slide);
    }
    
    render(){
        if( React.Children.count(this.props.children) === 0 ) return null;
        
        return (
            <div className="slideShow" onClick={ () => this.setCurrentSlide(this.props.currentSlide + 1)}>
                <Slide key={this.props.currentSlide}>
                    {(React.Children.count(this.props.children) > 1) ? this.props.children[this.props.currentSlide] : this.props.children}
                </Slide>
            </div>
        );
    }
    
}

function mapStateToProps ({currentSlide}){
    return{
        currentSlide
    }
}

export default connect(mapStateToProps, {change_slide})(SlideShow);