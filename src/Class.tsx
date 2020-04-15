import React, { Component } from 'react';
import Message from './Message';

const initialState = {
  name: 'name',
  message: 'message',
};

type State = Readonly<typeof initialState>;

class Class extends Component<any, State> {
  readonly state: State = initialState;

  render() {
    return (
      <Message name={this.state.name} message={this.state.message} />
    );
  }
}

export default Class;