import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './register';
import AuctionList from './AuctionList';
import Auction from './auction';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={AuctionList} />
        <Route path="/auction/:id" component={Auction} />
      </Switch>
    </Router>
  );
}

export default App;