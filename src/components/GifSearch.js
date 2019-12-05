import React from 'react';

export default class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }
    search = event => {
        this.setState({
            search: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={event => this.props.fetching(event, this.state.search)}>
                <input type="text" id="search" onChange={this.search} value={this.state.search} />
                <button>Find</button>
            </form>
        );
    }
}