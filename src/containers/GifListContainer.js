import React, { Component } from 'react'
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gifs: []
        }
    }

    fetching = (event, q) => {
        event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=
            //the api key 
        =g`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: data.url
                })
            })

    }
    render() {
        return (
            <div>
                <GifSearch fetching={this.fetching} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}