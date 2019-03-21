import React from 'react';

export default class Counter extends React.Component {
  render() {
    const {array} = this.props;

    return <p>{array[0]}</p>;
  }
}