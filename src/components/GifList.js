import React, {Component} from 'react'


//<GifList /> is a presentational component.
// It receives data from its props and renders html given the input data. 
//It can render a top level <ul> with each gif as an <li>

export default class GifList extends Component{

    constructor(props){
        super(props)

        this.state = {
            //initial state
            newList: []
        }
    }

    componentWillReceiveProps(props){
        //update value from props (in parent)
        this.setState({newList:props.list })
    }

    render(){
        return(<ul>
            
            {this.state.newList.map(gif => <li key={gif}><img src={gif} /></li>)}

        </ul>)
    }
}