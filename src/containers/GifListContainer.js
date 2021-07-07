import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            imgG:[]
        }
    }
 
    handleFetchQuery = (e,query) =>{
        e.preventDefault();
        fetch('https://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=2HazIuTJSnUIoYCB2EpQvdCZPEPenUwv&rating=g').then(res=>res.json()).then(data=>{
            console.log('inside ',data)
            this.setState({
                imgG:data.data.slice(0,3)
            })
        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                <GifList imgG={this.state.imgG} />
                <GifSearch handleFetch={this.handleFetchQuery} />
            </div>
        );
    }
}