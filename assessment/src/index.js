import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './OrdersManagement';
import OrdersCalendarView from './OrdersCalendarView';
import './style.css';

const App = () => {
  return (
    <Router>
        <div>
        <header>
          <h1 align="center">ERP System</h1>
          <h1 align="center">(Enterprise Resource Planning) System</h1>
      
          <nav>
            <ul>
              <li><NavLink exact to="/" activeClassName="active" ><h2>Dashboard</h2></NavLink></li>
              <li><NavLink to="/products" activeClassName="active"><h2>Products Management</h2></NavLink></li>
              <li><NavLink to="/orders" activeClassName="active"><h2>Orders Management</h2></NavLink></li>
              <li><NavLink to="/calendar" activeClassName="active"><h2>Order Calendar View</h2></NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/products" component={ProductsManagement} />
      <Route path="/orders" component={OrdersManagement} />
      <Route path="/calendar" component={OrdersCalendarView} />
    </Switch>
  </main>
        
      </div>
    </Router>
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));