import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import SlideShow from './components/slide-show.jsx';
import Cover from './components/slides/cover.jsx';
import Slide4 from './components/slides/slide-4.jsx';
import Slide5 from './components/slides/slide-5.jsx';
import Slide6 from './components/slides/slide-6.jsx';

export default class App extends Component {
  constructor(props){
	super(props);
  }
  
  render(){
	return (
		<SlideShow transition="horizontal" theme="orlando">
			<Cover />
			<Slide4 />
			<Slide5 />
			<Slide6 />
		</SlideShow>
	);
  }
}
