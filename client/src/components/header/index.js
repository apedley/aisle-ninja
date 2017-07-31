import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Aisle Ninja</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink exact to="/" activeClassName='active'>Home</NavLink>
                </li>              
                <li>
                  <NavLink to="/recipes" activeClassName='active'>Recipes</NavLink>
                </li>
                <li>
                  <NavLink to="/lists" activeClassName='active'>Lists</NavLink>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Sign In</Link>
                </li>
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;