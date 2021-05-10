import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StrongItem.css';

export default class StrongItem extends Component {

  render() {
    const being = this.props.being;
    console.log(being);
    return (
      <li className="StrongItem">
        <Link to={`/strongest/${being.id}`}>
          <h2>{being.name}</h2>
          <p>Type: {being.type}</p>
          <img src={being.image} alt={being.name}/>
          <p>Power Level: {being.power}</p>
          
        </Link>
      </li>
    ); 
    
  }
}