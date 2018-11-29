import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.scss';

class IndexPage extends React.Component{
  render(){
    let {num, changeNum} = this.props;
    return <div>
      <span className={[styles.button, styles.button1]} onClick={()=>changeNum('+')}>+</span>
      <span>{num}</span>
      <span className={styles.button} onClick={()=>changeNum('-')}>-</span>

      <button className="btn1">取消</button>
      <button className="btn2">完成</button>
    </div>
  }
}

const mapStateToProps = state=>{
  console.log('state...', state);
  let {num} = state.index;
  return {
    num
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    changeNum: type=>{
      dispatch({
        type: 'index/changeNum',
        payload: type
      });
      dispatch({
        type: 'index/getList',
        payload: type
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
