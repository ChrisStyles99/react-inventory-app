import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/userActions';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [sidebar, setSidebar] = useState(false);

  const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setSidebar((sidebar) => !sidebar);
  };

  const removeToken = () => {
    dispatch(logout);
  };

  const isActive = sidebar ? 'active' : '';

  return (
    <nav className="navbar">
      <h1 className="logo">
        {isLoggedIn && <NavLink
          className="nav-logo" to="/">
          Inventory app
        </NavLink>}
        {!isLoggedIn && 'Inventory app'}
      </h1>
      <ul className={'nav-list ' + isActive}>
        {isLoggedIn && <li>
          <NavLink exact activeStyle={{ backgroundColor: '#556e53' }} className="nav-link" to="/">
            View inventory
          </NavLink>
        </li>}
        {isLoggedIn && <li>
          <NavLink
            activeStyle={{ backgroundColor: '#556e53' }}
            className="nav-link"
            to="/add-product"
          >
            Add product
          </NavLink>
        </li>}
        {isLoggedIn && <li>
          <NavLink
            activeStyle={{ backgroundColor: '#556e53' }}
            className="nav-link"
            to="/search"
          >
            Search
          </NavLink>
        </li>}
        {!isLoggedIn && <li>
          <NavLink
            activeStyle={{ backgroundColor: '#556e53' }}
            className="nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </li>}
        {isLoggedIn && <li style={{ color: '#fff', cursor: 'pointer' }} onClick={removeToken}>
          Logout
        </li>}
        <li
          style={{ color: '#fff', cursor: 'pointer' }}
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        >
          {darkMode ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </li>
      </ul>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
