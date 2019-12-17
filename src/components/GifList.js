import React from 'react';

export default class GifList extends React.PureComponent{

    render(){
        const {imgData} = this.props;
        return(
                <ul>
                    {imgData.map(img=><li><img src={img.images.original.url} /></li>)}
                </ul>
        );
    }
}