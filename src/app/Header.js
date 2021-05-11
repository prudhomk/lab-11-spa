import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Strongest in the Universe</h1>
        
        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/strongest" exact={true}>Champions</NavLink>
          <NavLink to="/strongest/add">Add Contestant</NavLink>
        </nav>
      </header>
    );
  }

}
 
export default Header;