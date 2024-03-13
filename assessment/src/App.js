import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './OrdersManagement';
import OrdersCalendarView from './OrdersCalendarView';


function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/products" component={ProductsManagement} />
        <Route exact path="/orders" component={OrdersManagement} />
        <Route exact path="/calendar" component={OrdersCalendarView} />
      </Switch>
    </Router>
    
  
  );
}

export default App;