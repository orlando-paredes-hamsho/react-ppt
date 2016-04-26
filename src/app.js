import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import SlideShow from './components/slide-show.jsx';
import * as Slides from './components/slides';

var slides = Slides.default;

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
        <SlideShow transition="horizontal" theme="tcs">
          {_.map(slides,(slide) => {
            return slide.default.prototype.render();
          })}
        </SlideShow>
    );
  }
}
