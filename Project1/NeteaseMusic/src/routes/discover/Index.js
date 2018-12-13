import React from 'react';
import {connect} from 'dva';
import {NavLink} from 'dva/router';
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
  click(){
    // console.log('_htm', window._hmt);
    window._hmt.push(['_trackEvent', '网易云音乐', '按钮点击', '搜索按钮']);
  }

  render(){
    console.log('props..', this.props);
    let {banners} = this.props;
    return <div>
      {/* <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >{
          banners.map((item, index)=>{
            return <img key={index} src={item.imageUrl}/>
          })
        }</Carousel> */}
        <section>
          <NavLink to={{
            pathname: '/main/recommend',
            state: {a:1}
          }}>每日推荐</NavLink>
          <NavLink to={{
            pathname: '/main/search'
          }} onClick={()=>this.click()}>搜索</NavLink>
          <button onClick={()=>this.click()}>搜索</button>
        </section>
     </div>
  }
}

export default Index;
