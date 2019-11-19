import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="col-md-6">
        <ul>
          {data.map(img => (
            <li className="list-item" key={img.id}>
              <img
                src={img.images.original.url}
                alt="..."
                className="img-thumbnail"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
