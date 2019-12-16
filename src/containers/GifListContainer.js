import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            gifs:[]
        }
    }
    fetchHandler = (query) =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({obj}) => {
        this.setState(
            {
                gifs: obj.map( gif => ({ url: gif.images.original.url }) ) 
            }
        )
      })
    }
    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchHandler} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}