import React from 'react';

export default class GifSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            search:""
        }
    }
    handleSearch = event =>{
        this.setState({
            search:event.target.value
        })
    }
    render(){
        return(
            <form onSubmit={event=>this.props.handleFetch(event,this.state.search)}>
                <input type="text" id="search" onChange={this.handleSearch} value={this.state.search} />
                <button>Find Gifs</button>
            </form>
        );
    }
}