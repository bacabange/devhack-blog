import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/create" exact component={CreatePost} />
            <Redirect to="/" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
