import React from 'react';
import dispatch from '../../utils/dispatch';

class Index extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      obj: {
        name: '',
        num: ''
      }
    }
  }

  sendMessage(res){
    console.log('res...', res);
  }

  componentDidMount(){
    dispatch.on(this, 'postMessage', this.sendMessage)
  }

  render(){
    return <React.Fragment>
      <h1>{this.props.match.path}</h1>
      <h2>{this.state.obj.name}</h2>
      <h2>{this.state.obj.num}</h2>
    </React.Fragment>
  }

  componentWillUnmount(){
    dispatch.off(this, 'postMessage', this.sendMessage);
  }
}

export default Index;
