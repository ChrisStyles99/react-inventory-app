import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Navbar = ({darkMode, toggleTheme}) => {

  const [sidebar, setSidebar] = useState(false);

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebar(sidebar => !sidebar);
  }

  const removeToken = () => {
    dispatch(logout);
  }

  const isActive = sidebar ? 'active' : '';

  return (
    <nav className="navbar">
      <h1 className="logo"><Link className="nav-logo" to="/">Inventory app</Link></h1>
      <ul className={'nav-list ' + isActive}>
        <li><Link className="nav-link" to="/">View inventory</Link></li>
        <li><Link className="nav-link" to="/add-product">Add product</Link></li>
        <li><Link className="nav-link" to="/login">Login</Link></li>
        <li style={{color: '#fff', cursor: 'pointer'}} onClick={removeToken}>
          Logout
        </li>
        <li style={{color: '#fff', cursor: 'pointer'}} onClick={toggleTheme}>
          {darkMode ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </li>
      </ul>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  )
}

export default Navbar
