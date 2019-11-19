import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    const search = e.target.value;
    this.setState({ search });
  };
  render() {
    return (
      <div className="col-md-4">
        <form action="" onSubmit={this.props.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              id="search"
              className="form-control"
            />
            <button className="btn btn-success btn-sm ">Search Gif</button>
          </div>
        </form>
      </div>
    );
  }
}
