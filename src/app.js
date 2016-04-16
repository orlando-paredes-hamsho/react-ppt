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
        <SlideShow transition="opacity" theme="tcs">
          <img src="https://www.nyfa.edu/student-resources/wp-content/uploads/2014/06/Landscape-Sunset.jpg" />  
          <img src="http://science-all.com/images/landscape/landscape-05.jpg" />
          <img src="http://www.technocrazed.com/wp-content/uploads/2015/12/Landscape-wallpaper-7.jpg" />
        </SlideShow>
    );
  }
}
