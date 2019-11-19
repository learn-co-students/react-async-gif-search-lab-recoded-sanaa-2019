import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const key = "jNq6gbUZKBTmqUZpQeg8kMqw1ghCBpy2";
    const search = e.target.search.value;
    console.log(search);
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&rating=g&limit=3`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data.data }));
  };
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <GifSearch onSubmit={this.handleSubmit} />
        <GifList data={data} />
      </div>
    );
  }
}
