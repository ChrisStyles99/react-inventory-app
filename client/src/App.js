import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import Footer from './components/Footer';
import InventoryGrid from './components/InventoryGrid';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Product from './components/Product';
import SearchItem from './components/SearchItem';

const ProtectedRoute = ({component: Component, ...rest}) => {

  const token = useSelector(state => state.userReducer.token);

  return (
    <Route {...rest} render={
      (props) => {
        if(token === null) {
          return <Redirect to={{pathname: '/login'}}/>
        } else {
          return <Component {...props} />
        }
      }
    }>
    </Route>
  )
}

function App() {

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  const isDarkMode = darkMode ? 'dark' : ''

  return (
    <div className={`App ${isDarkMode}`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Switch>
          <ProtectedRoute exact path="/" component={InventoryGrid}>
          </ProtectedRoute>
          <ProtectedRoute path="/add-product" component={AddProductForm}>
          </ProtectedRoute>
          <Route path="/login" component={LoginForm}>
          </Route>
          <ProtectedRoute exact path="/product/:id" component={Product}>
          </ProtectedRoute>
          <ProtectedRoute path="/product/edit/:id" component={EditProductForm}>
          </ProtectedRoute>
          <ProtectedRoute path="/search" component={SearchItem}></ProtectedRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
