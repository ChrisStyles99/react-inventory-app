import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { getItems } from './actions/itemActions';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import Footer from './components/Footer';
import InventoryGrid from './components/InventoryGrid';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Product from './components/Product';

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

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(darkMode => !darkMode);
    if(darkMode === true) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }

  const getDarkMode = () => {
    if(localStorage.getItem('darkMode') === 'true') {
      return true
    } else {
      return false
    }
  }

  const isDarkMode = getDarkMode() ? 'dark' : ''

  return (
    <div className={'App ' + isDarkMode}>
      <Router>
        <Navbar darkMode={getDarkMode} toggleTheme={toggleTheme}/>
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
          <Route path="*" component={() => "404 NOT FOUND"}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
