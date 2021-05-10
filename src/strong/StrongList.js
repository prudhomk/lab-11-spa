import React, { Component } from 'react';
import StrongItem from './StrongItem';
import './StrongList.css';


export default class StrongList extends Component {

  render() {
    const { strongest } = this.props;

    return (
      <ul className="StrongList">
        {strongest.map(being => (
          <StrongItem key={being.id} being={being}/>
        ))}
      </ul>
    );
  }
}