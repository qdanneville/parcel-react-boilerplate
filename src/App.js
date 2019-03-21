import React, { Component } from 'react';
import Counter from './components/Counter'

class App extends Component {
  render() {
    let text = 'My App';

    let item = [
      1,
      2,
      3,
    ]
    return (
      <div className="App">
        <h2>{text !== '' ? text : 'Default App Name'}</h2>
        <Counter
          array={item}
        />
      </div>
    );
  }
}

export default App;
