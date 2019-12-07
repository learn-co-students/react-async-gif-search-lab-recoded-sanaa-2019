import React, { Component } from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myGif:[],
           
        }
    }
    search=(event,q)=>{
        event.preventDefault();
        fetch('https://api.giphy.com/v1/gifs/search?q=' + q + '&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response=>response.json())
        .then(json=>
       this.setState({myGif:[json.data[0].images.original.url,json.data[1].images.original.url,json.data[2].images.original.url]}))

    }
    render() {
        return (
            <div>
                <GifList list={this.state.myGif}/>
                <GifSearch search={this.search}/>
            </div>
        )
    }

}
