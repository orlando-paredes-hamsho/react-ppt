import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import SlideShow from './components/slide-show.jsx';
import Cover from './components/slides/cover.jsx';
import Slide1 from './components/slides/slide-1.jsx';
import Slide2 from './components/slides/slide-2.jsx';
import Slide3 from './components/slides/slide-3.jsx';
import Slide4 from './components/slides/slide-4.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
        <SlideShow transition="horizontal" theme="tcs">
          <Cover />
          <Slide1 />
           <Slide2 />
            <Slide3 />
            <Slide4 />
        </SlideShow>
    );
  }
}
