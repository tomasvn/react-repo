import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import { Home, Favorite } from './routes'

class App extends Component {
  
  render() {
    return(
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/favorite" component={Favorite} />
      </Router>
    )
  }
}

export default App;
