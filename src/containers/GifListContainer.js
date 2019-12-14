import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


//parent for GifList and GifSearch

export default class GifListContainer extends Component{

   constructor(props){
       super(props)
       
       //set some initial data
       this.state ={
        url: [],
        input: 'dolphin'

    }

   }
    handlerSubmit = (newInput) => {
        //console.log(this.state.input);
       console.log(newInput);
        this.setState({
            input: newInput
        })
    }
    
    render(){
        return(<div>

            <GifSearch handleSubmit={this.handlerSubmit} />
            <button onClick={this.componentDidMount} >ok</button>
            <GifList list={this.state.url}/>
           

        </div>)
    }


//does not update to the new input
    componentDidMount(){
        
            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.input}&apikey=ak97wA2QJ60o19xVdONvnAJOadMihhgZ&rating=g`)
            .then(resp => resp.json())
            .then(obj => { console.log(obj.data[0].images.original.url);
                console.log("test");
            
            //first 3 gifs
                    this.setState(
                     
                    {url:  [obj.data[0].images.original.url,obj.data[1].images.original.url,obj.data[2].images.original.url]}
                    
                )
  
         })
    }

}