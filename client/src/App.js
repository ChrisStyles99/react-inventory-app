import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import Footer from './components/Footer';
import InventoryGrid from './components/InventoryGrid';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(darkMode => !darkMode);
  }

  const isDarkMode = darkMode ? 'dark' : ''

  return (
    <div className={'App ' + isDarkMode}>
      <Router>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>
        <Switch>
          <Route exact path="/">
            <InventoryGrid />
          </Route>
          <Route path="/add-product" component={AddProductForm}>
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/product/:id" component={Product}>
          </Route>
          <Route path="/product/edit/:id" component={EditProductForm}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
