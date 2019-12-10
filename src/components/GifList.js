import React from 'react';

export default class GifList extends React.PureComponent{
   
    render(){
        const {imgG} = this.props;
       
        return(
                <ul>
                    {imgG.map(img=><li><img src={img.images.original.url} /></li>)}
                </ul>
        );
    }
}