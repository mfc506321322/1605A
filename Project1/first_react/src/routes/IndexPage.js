import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  render(){
    let {num, changeNum} = this.props;
    return <div>
      <span className={styles.button} onClick={()=>changeNum('+')}>+</span>
      <span>{num}</span>
      <span className={styles.button} onClick={()=>changeNum('-')}>-</span>
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
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
