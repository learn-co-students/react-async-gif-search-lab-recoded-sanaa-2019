import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      imgData: []
    };
  }
  fetchHandle = (e,query) =>{
    e.preventDefault();
    fetch('https://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=2HazIuTJSnUIoYCB2EpQvdCZPEPenUwv&rating=g')
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        this.setState({
        imgData:json.data.slice(0,3)
        })
    }).catch(error=>console.log(error));
}
 
  render() {
    return (
      <div>
        <GifSearch handleFetch={this.fetchHandle} />
        <GifList imgData={this.state.imgData} />
      </div>
    );
  }
}