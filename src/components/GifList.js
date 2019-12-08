import React from 'react';

export default class GifList extends React.PureComponent{
    // componentDidUpdate(){
    //     this.setState()
    // }
    render(){
        const {gifs} = this.props;
        // console.log('render ',images)
        return(
                <ul>
                    {gifs.map((gif,index)=><li key={index}><img src={gif.images.original.url} /></li>)}
                </ul>
        );
    }
}