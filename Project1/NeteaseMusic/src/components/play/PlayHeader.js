import React from 'react';
import styles from './PlayHeader.scss';
// 引入context
import DataContext from '../../context/index';

export default props=>{
  return <React.Fragment>
    <h1>播放歌曲页面</h1>
    <h2>{props.name}</h2>
    <img className={props.isPlay?styles.picUrl:styles.disable} src={props.picUrl}/>
    <DataContext.Consumer>{
      // ({data, changeData})=><div>
      //   <button onClick={()=>changeData('歌曲面板触发了事件')}>触发事件</button>
      //   <p>{data.name}</p>
      //   <p>{data.num}</p>
      // </div>
      context=><div>{JSON.stringify(context)}</div>
    }</DataContext.Consumer>
    <img className={props.isPlay?styles.picUrl:styles.disable} src={props.picUrl}/>
  </React.Fragment>
}
