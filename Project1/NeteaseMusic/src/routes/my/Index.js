import React from 'react';
import dispatch from '../../utils/dispatch';

class Index extends React.PureComponent{

  click(){
    dispatch.emit('postMessage', {name: '1605A',num: '23人'});
  }

  render(){
    return <React.Fragment>
      <h1>{this.props.match.path}</h1>
      <button onClick={()=>this.click()}>发送消息到首页</button>
    </React.Fragment>
  }
}

export default Index;
