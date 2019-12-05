import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {<li><img src={this.props.gifs} /></li>}                </ul>
            </div>
        )
    }
}
