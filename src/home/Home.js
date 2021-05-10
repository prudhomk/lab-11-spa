import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Only the Strong may Enter:</h2>

        <Link to='/strongest'>Enter</Link>
      </div>
    );
  }

}