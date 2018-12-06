import React from 'react';
import styles from './PlayHeader.scss';

export default props=>{
  return <React.Fragment>
    <h1>播放歌曲页面</h1>
    <h2>{props.name}</h2>
    <img className={props.isPlay?styles.picUrl:styles.disable} src={props.picUrl}/>
  </React.Fragment>
}
