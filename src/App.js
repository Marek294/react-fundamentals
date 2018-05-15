import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---'
    }

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      currentEvent: e.type
    })
  }

  render() {
    const { currentEvent } = this.state;
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10" />
        <h1>{currentEvent}</h1>
      </div>
    );
  }
}

export default App;