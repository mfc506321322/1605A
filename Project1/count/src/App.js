import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('count')
@observer
class App extends Component {
  render() {
    console.log('props...', this.props);
    return (
      <div>
        <button>+</button>
        <span></span>
        <button>-</button>
      </div>
    );
  }
}

export default App;
