import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// Components
import { Navbar } from './components/Navbar/';
import { Header } from './components/Header/';
import { Container } from './components/Container/';
import { Footer } from './components/Footer/';

// Pages
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />

          <Header />

          <Container>
            <Switch>
              {/* <Redirect from="/home" to="/create" /> */}
              <Route path="/" exact component={Home} />
              <Route path="/create" exact component={CreatePost} />
              <Route path="/post/:id" exact component={Post} />
              {/* Crear pagina/ruta para el error 404 */}
              <Route component={NotFound} />
            </Switch>
          </Container>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
