import React from 'react';

export default class GifList extends React.PureComponent{
    // componentDidUpdate(){
    //     this.setState()
    // }
    render(){
        const {imgs} = this.props;
        // console.log('render ',images)
        return(
                <ul>
                    {imgs.map(img=><li><img src={img.images.original.url} /></li>)}
                </ul>
        );
    }
}