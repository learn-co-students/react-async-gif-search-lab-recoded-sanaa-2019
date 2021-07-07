import React from 'react';

export default class GifSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            search:""
        }
    }
    handleSearch = e =>{
        this.setState({
            search:e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={e=>this.props.handleFetch(e,this.state.search)}>
                <input type="text" id="search" onChange={this.handleSearch} value={this.state.search} />
                <button>Find Gifs</button>
            </form>
        );
    }
}