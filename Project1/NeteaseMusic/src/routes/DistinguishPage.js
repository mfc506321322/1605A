import React from 'react';
import {connect} from 'dva';
import {randomArr} from '../utils/index';
import styles from './DistinguishPage.scss';

@connect(({play})=>{
  console.log('play..', play);
  return play
}, dispatch=>{
  return {

  }
})
class Distinguish extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      rightAnser: [],
      answers: [],  // 用户选择的答案数组
      answerList: []  // 备选答案
    }
  }

  static getDerivedStateFromProps(props, state){
    return {
      rightAnser: props.distiguishList.map(item=>item.name.name)
    }
  }

  randomAnswer(){
    this.setState({
      answerList: randomArr(this.state.rightAnser)
    })
  }

  componentDidMount(){
    this.randomAnswer();
  }

  render(){
    console.log('this.state....', this.state);
    return <React.Fragment>
      <h2>猜歌名</h2>
      <ul>{this.state.answerList.map((item)=>{
        return <button className={styles.answer} key={item}>{item}</button>
      })}</ul>
      {/* 进度条 */}
      <div>
        <span>{this.currentTime}</span>
        <div className={styles.progress}>
          <p ref="progress">
            <span style={{width:this.state.progress+'%'}}></span>
          </p>
        </div>
        <span>{this.duration}</span>
      </div>
      {/* 音频播放器 */}
      {this.props.url?<audio crossOrigin="anonymous" src={this.props.url} autoPlay ref="audio" onTimeUpdate={()=>this.timeUpdate()}></audio>:null}
    </React.Fragment>;
  }
}

export default Distinguish;
