import React from 'react';
import { Component } from 'react';
import $ from 'jquery';

import SlideShow from './components/slide-show.jsx';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
        <SlideShow>
          <p>Hello!</p>
          <p>How's it going</p>
          <p>Is each one of this different?</p>
        </SlideShow>
    );
  }
}
