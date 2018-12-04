import React from 'react';
import {connect} from 'dva';

@connect(({discover})=>{
  return discover
}, dispatch=>{
  return {
    getRecommendResource: ()=>{
      dispatch({
        type: 'discover/getRecommendResource'
      })
    }}
  }
)
class Recommend extends React.PureComponent{
  componentDidMount(){
    this.props.getRecommendResource();
  }
  render(){
    console.log(this.props);
    return <h1>每日推荐页面</h1>
  }
}

export default Recommend;
