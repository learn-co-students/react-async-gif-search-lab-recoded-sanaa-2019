import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            imgs:[]
        }
    }
    // componentDidMount(){
    //     this.handleFetchQuery
    // }
    handleFetchQuery = (event,query) =>{
        event.preventDefault();
        fetch('https://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=2HazIuTJSnUIoYCB2EpQvdCZPEPenUwv&rating=g').then(res=>res.json()).then(data=>{
            console.log('inside ',data)
            this.setState({
                imgs:data.data.slice(0,3)
            })
        }).catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
                <GifList imgs={this.state.imgs} />
                <GifSearch handleFetch={this.handleFetchQuery} />
            </div>
        );
    }
}