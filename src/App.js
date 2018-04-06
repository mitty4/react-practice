import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';



export default class App extends Component {

  constructor(){
    super();
    this.state = {
      test: 'woah thats a props',
      arg: ''
    }
  };

changeArg(arg) {
  this.setState({arg});
}

  render() {
    const title = 'mitchell';
    return (
      <Test blah = {this.state.test} arg = {this.state.arg} changeArg = {this.changeArg.bind(this)} />
    );
  }
}
