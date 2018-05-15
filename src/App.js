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
        <h1>{txt} - {cat}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    );
  }
}

const Widget = (props) =>  
<input type="text" onChange={props.update} />

export default App;