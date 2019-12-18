import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GiftList from '../components/GifList'
export class GifListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             search:"Boy"
        }
    }
    submitHundler=(event)=>{
        event.preventDefault();
        event.persist();
        this.setState({search:event.target[0].value})
        console.log(event.target[0].value);
    }
    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`).then(json=>json.json()).then(json=>{
            this.setState({data:json.data})
        })
    }
    render() {
        return (
            <div>
                <GifSearch submitHundler={this.submitHundler}/>
                <GiftList  data={this.state.data}/>
                
            </div>
        )
    }
}

export default GifListContainer