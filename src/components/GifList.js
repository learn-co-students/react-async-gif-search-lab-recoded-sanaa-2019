import React, { Component } from 'react'

export default class GifList extends Component {
  
   
    
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map((el,index)=><li key={index}><img src={el}/></li>)}
                    </ul>
            </div>
        )
    }
}
