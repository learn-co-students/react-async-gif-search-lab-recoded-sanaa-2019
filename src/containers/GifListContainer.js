import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component{
    constructor(){
        super()
        this.state={
            gifs:[]
        }
    }
    myFetch = (event,query) =>{
        event.preventDefault();
        fetch('https://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=2HazIuTJSnUIoYCB2EpQvdCZPEPenUwv&rating=g')
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                gifs:data.data.slice(0,3)
            })
            console.log(this.state.gifs)
        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                <GifSearch fetchHandler={this.myFetch} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}