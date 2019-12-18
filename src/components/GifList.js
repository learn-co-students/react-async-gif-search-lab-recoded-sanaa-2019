import React, { Component } from 'react'

export class GifList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:[]
        }
    }
    
    componentDidMount(){
        console.log("object");
    }
    dataMapping=()=>{
        return this.props.data.map(e=>{
        return <li><img src={e.images.original.url} alt=""/></li>
        })
        
    }
    render() {
        return (
            <ul>
                {this.dataMapping()}
            </ul>
        )
    }
}

export default GifList