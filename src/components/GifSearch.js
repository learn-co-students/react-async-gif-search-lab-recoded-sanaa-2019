import React from 'react';

export default class GifSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            search:""
        }
    }
    searchHandler = event =>{
        this.setState({
            search: event.target.value
        })
    }
    render(){
        return(
            <form onSubmit={event=>this.props.fetchHandler(event,this.state.search)}>
                <input type="text" id="search" onChange={this.searchHandler} value={this.state.search} />
                <button>Find Gifs</button>
            </form>
        );
    }
}