import React from 'react';
import {connect} from 'dva';
import { Carousel } from 'antd-mobile';

@connect(({discover})=>{
  return discover
}, dispatch=>{
  return {
    getBanner: ()=>{
      dispatch({
        type: 'discover/getBanner'
      })
    }}
  }
)
class Index extends React.PureComponent{
  componentDidMount(){
    this.props.getBanner();
  }
  render(){
    console.log('props..', this.props);
    let {banners} = this.props;
    return <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >{
          banners.map((item, index)=>{
            return <img key={index} src={item.imageUrl}/>
          })
        }</Carousel>
  }
}

export default Index;
