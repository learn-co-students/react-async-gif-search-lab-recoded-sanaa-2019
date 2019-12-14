  
import React, { Component } from "react";

export default class GifSearch extends Component {
    constructor(){
        super()

        this.state = {
            input: ""
          };
    }
  
  inputValue = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
        <form onSubmit={this.props.onSubmit}>
          <strong>Enter a search term:</strong>
            <input type="text" value={this.state.input} onChange={e => this.inputValue(e)}/>
            <button type="button" style={{color:'white', background:'green'}}>Find Gifs</button>
       
        </form>
    );
  }
}