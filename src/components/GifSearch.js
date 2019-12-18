
import React, { Component } from 'react'

export class GifSearch extends Component {
    render() {
        return (
            <div>
                <form action="" onSubmit={this.props.submitHundler}>
                    <input type="text" name="search"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default GifSearch