import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StrongItem.css';

export default class StrongItem extends Component {

  render() {
    const being = this.props.being;

    return (
      <li className="StrongItem">
        <Link to={`/strongest/${being.id}`}>
          <h2>{being.name}</h2>
          <p>Description: {being.description}</p>
          <p>Power Level: {being.power}</p>
          <p>Will Protect the Universe:{being.isGood}</p>
        </Link>
      </li>
    ); 
    
  }
}