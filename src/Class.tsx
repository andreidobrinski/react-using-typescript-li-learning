import React, { Component } from 'react';

class Class extends Component<any> {
  componentWillMount() {
    console.log('cwm');
  }
  componentDidMount() {
    console.log('cdm');
  }

  render() {
    return (<p>hello</p>)
  }
}

export default Class;