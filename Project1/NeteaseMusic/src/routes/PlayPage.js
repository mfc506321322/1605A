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
    },
    chanagePlay: payload=>{
      dispatch({
        type: 'play/changePlay',
        payload
      })
    },
    changeMode: ()=>{
      dispatch({
        type: 'play/changeMode',
      })
    }
  }
})
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
    }, ()=>{
      if (this.state.progress == 100){
        // 自动播放下一首
        this.props.chanagePlay('next');
        if (!this.props.playList.length){
          this.refs.audio.pause();
          this.refs.audio.currentTime = 0;
          this.refs.audio.play();
        }
      }
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

  // 获取播放模式
  get mode(){
    return this.props.mode==1?'单曲循环':this.props.mode==2?'随机播放':'列表循环'
  }

  // 播放/暂停
  changeState(){
    this.setState({
      isPlay: !this.state.isPlay
    }, ()=>{
      this.state.isPlay?this.refs.audio.play():this.refs.audio.pause();
    })
  }

  // 触摸进度条事件
  touchStart(){
    this.setState({
      isPlay: false
    }, ()=>{
      this.refs.audio.pause();
    })
  }
  // 移动过进度条
  touchMove(e){
    // console.log('触摸事件...', e.touches);
    let touch = e.touches[0],
        progressEle = this.refs.progress;
    let progress = (touch.pageX - progressEle.offsetLeft)/progressEle.offsetWidth;
    if (progress>1){
      progress = 1;
    }
    if (progress<0){
      progress = 0;
    }
    this.setState({
      progress: progress*100
    }, ()=>{
      this.refs.audio.currentTime = progress*this.refs.audio.duration
    })
    // console.log('progress..', progress, progress*this.refs.audio.duration);
  }
  // 离开进度条
  touchEnd(){
    this.setState({
      isPlay: true
    }, ()=>{
      this.refs.audio.play();
    })
  }
  // 切换歌曲
  chanagePlay(type){
    this.props.chanagePlay(type);
  }

  // 切换播放模式
  changeMode(){
    this.props.changeMode();
  }

  render(){
    // console.log('play page...', this.props);
    if (!Object.keys(this.props.detail).length){
      return null;
    }
    return <div>
      <h1>播放歌曲页面</h1>
      <h2>{this.props.detail.name}</h2>
      <div>
        <img className={this.state.isPlay?styles.picUrl:styles.disable} src={this.props.detail.al.picUrl}/>
        <div>
          <span>{this.currentTime}</span>
          <div className={styles.progress}
            onTouchStart={this.touchStart.bind(this)}
            onTouchMove={this.touchMove.bind(this)}
            onTouchEnd={this.touchEnd.bind(this)}>
            <p ref="progress">
              <span style={{width:this.state.progress+'%'}}></span>
            </p>
          </div>
          <span>{this.duration}</span>
        </div>

        <div>
          <button onClick={()=>this.changeMode()}>{this.mode}</button>
          <button onClick={()=>this.chanagePlay('prev')}>上一曲</button>
          <button onClick={this.changeState.bind(this)}>{this.state.isPlay?'暂停':'播放'}</button>
          <button onClick={()=>this.chanagePlay('next')}>下一曲</button>
        </div>
      </div>
      {this.props.url?<audio src={this.props.url} autoPlay ref="audio" onTimeUpdate={()=>this.timeUpdate()}></audio>:null}
      <ul>{
        this.props.playList.map((item, index)=>{
          return <li className={styles.item} key={index}>
              <img src={item.detail.al.picUrl}/>
              <div>
                <p>{item.detail.name}</p>
                <p>{`${item.detail.al.name}`}</p>
              </div>
            </li>
        })
      }</ul>
    </div>
  }
}

export default Play;
