import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
