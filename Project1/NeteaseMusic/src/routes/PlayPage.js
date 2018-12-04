import React from 'react';
import {connect} from 'dva';
import styles from './PlayPage.scss';
import {formatTime} from '../utils/index';

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
  constructor(){
    super();
    this.state = {
      progress: 0,
      isPlay: true
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    this.props.getUrl(id);
  }

  // 播放进度更新触发的钩子
  timeUpdate(){
    let progress = this.refs.audio.currentTime/this.refs.audio.duration*100;
    this.setState({
        progress
    })
  }

  // 获取总时长
  get duration(){
    if (this.refs.audio && this.refs.audio.duration){
      return formatTime(this.refs.audio.duration);
    }
    return '00:00';
  }

  // 获取当前播放时间
  get currentTime(){
    if (this.refs.audio && this.refs.audio.currentTime){
      return formatTime(this.refs.audio.currentTime);
    }
    return '00:00';
  }

  // 播放/暂停
  changeState(){
    this.setState({
      isPlay: !this.state.isPlay
    }, ()=>{
      this.state.isPlay?this.refs.audio.play():this.refs.audio.pause();
    })
  }

  render(){
    console.log('play page...', this.props);
    if (!Object.keys(this.props.detail).length){
      return null;
    }
    return <div>
      <h1>播放歌曲页面</h1>
      <div>
        <img className={this.state.isPlay?styles.picUrl:styles.disable} src={this.props.detail.al.picUrl}/>
        <div>
          <span>{this.currentTime}</span>
          <p className={styles.progress}>
            <span style={{width:this.state.progress+'%'}}></span>
          </p>
          <span>{this.duration}</span>
        </div>

        <div>
          <button>上一曲</button>
          <button onClick={this.changeState.bind(this)}>{this.state.isPlay?'暂停':'播放'}</button>
          <button>下一曲</button>
        </div>
      </div>
      {this.props.url?<audio src={this.props.url} autoPlay ref="audio" onTimeUpdate={()=>this.timeUpdate()}></audio>:null}
    </div>
  }
}

export default Play;
