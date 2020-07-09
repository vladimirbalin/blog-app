import React from 'react';
import { NavLink } from "react-router-dom";


const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink to='/' className='navbar-brand'>Medium</NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to='/' className='nav-link'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/login' className='nav-link'>Sign-in</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/registration' className='nav-link'>Sign-up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default TopBar;