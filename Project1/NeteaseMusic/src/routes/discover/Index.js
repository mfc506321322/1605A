import React from 'react';

class Index extends React.PureComponent{
  render(){
    console.log('props..', this.props);
    return <h1>{this.props.match.path}</h1>
  }
}

export default Index;
