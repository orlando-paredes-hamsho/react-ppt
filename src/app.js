import React from 'react';
import { Component } from 'react';
import $ from 'jquery';

import SlideShow from './components/slide-show.jsx';
import Slide from './components/slide.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <SlideShow>
          <Slide>Hello!</Slide>
          <Slide>We're Making Slides!</Slide>
          <Slide>Maybe it's too complicated</Slide>
          <Slide>But it's cool right?</Slide>
        </SlideShow>
      </div>
    );
  }
}
