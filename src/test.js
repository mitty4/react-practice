import React, { Component } from 'react';
import './test.css';

export default class Test extends Component{
  handleChange(e) {
    const arg = e.target.value;
    this.props.changeArg(arg);
  }


  render(){
    return(
      <div className = "test">

        <h1>{this.props.blah} </h1>

        <input
          placeHolder = "type here"
          onChange = {this.handleChange.bind(this)}
        />

        <p>{this.props.arg || "Ill brb"}</p>

      </div>
    )
  }



}
