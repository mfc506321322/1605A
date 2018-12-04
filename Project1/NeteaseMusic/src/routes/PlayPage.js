import React from 'react';
import {connect} from 'dva';

@connect(({play})=>{
  return play
}, dispatch=>{
  return {
    getUrl: id=>{
      dispatch({
        type: 'play/getUrl',
        payload: id
      })
    }}
  }
)
class Play extends React.PureComponent{
  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.getUrl(id);
  }
  render(){
    console.log('play page...', this.props);
    return <div>
      <h1>播放歌曲页面</h1>
      {this.props.url?<audio src={this.props.url} autoPlay></audio>:null}
    </div>
  }
}

export default Play;
