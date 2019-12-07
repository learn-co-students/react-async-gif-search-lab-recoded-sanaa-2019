import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
    
        this.state = {
             gif:""
        }
    }
    handlechange=(e)=>{
        this.setState({
           gif:e.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={e=>this.props.search(e,this.state.gif)}>
            <strong>Enter a search term:</strong>
              <input type="text" value={this.state.gif} name="tex" onChange={this.handlechange}/>
              <button>Find Gifs</button>
         
          </form>
        )
    }
}
