import React, { Component } from 'react'

export default class GifList extends Component {
  
   
    
    render() {
        const {list}=this.props
        return (
            <div>
                <ul>
                    {list.map((el,index)=><li key={index}><img src={el}/></li>)}
                    </ul>
            </div>
        )
    }
}
