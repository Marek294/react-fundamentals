import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: '',
      b: ''
    }
  }

  update(e) {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }

  render() {
    return (
      <div>
        <Input
          ref={ component => this.a = component }
          type="text"
          update={this.update.bind(this)} />
          {this.state.a}
        <input
          ref='b'
          type="text"
          onChange={this.update.bind(this)} />
          {this.state.b}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <div><input ref="input" type="text" onChange={this.props.update} /></div>
    );
  }
}

export default App;