import React from 'react';

export default class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    search = e => {
        this.setState({
            search: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={e => this.props.fetching(e, this.state.search)}>
                <input type="text" id="search" onChange={this.search} value={this.state.search} />
                <button>SEARCH</button>
            </form>
        );
    }
} 