import React, { Component } from 'react';




export default class Test extends Component{

  handleChange(e) {
    const arg = e.target.value;
    this.props.changeArg(arg);
  }


  render(){
    return(
      <div>
        <h1> hellooooooo {this.props.blah} </h1>
        <input onChange = {this.handleChange.bind(this)} />
        <p>
            {this.props.arg || "chocolate"}
        </p>
      </div>
    )
  }

}
