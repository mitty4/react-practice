import React, { Component } from 'react';

import Test from './test';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 'woah thats a state',
      arg: ''
    }
  };

  changeArg(arg) {
    this.setState({arg});
  }



  render() {
    return (
      <Test
        blah = {this.state.test}
        arg = {this.state.arg}
        changeArg = {this.changeArg.bind(this)}
      />
    );
  }
}
