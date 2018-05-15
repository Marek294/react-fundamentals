import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    const { txt, cat } = this.state;

    return (
      <div>
        <input 
          type="text" 
          onChange={this.update.bind(this)} />
        <h1>{txt} - {cat}</h1>
      </div>
    );
  }
}

export default App;