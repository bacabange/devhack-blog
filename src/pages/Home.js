import React, { Component } from 'react';
import { PostPreview } from '../components/PostPreview/';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Header />

        <Container>
          <PostPreview title="Hola" body="Como estas" />
          <PostPreview title="Hola" body="Como estas" />
          <PostPreview title="Hola" body="Como estas" />
          <PostPreview title="Hola" body="Como estas" />
          <PostPreview title="Hola" body="Como estas" />
          <PostPreview title="Hola" body="Como estas" />
        </Container>

        <Footer />
      </React.Fragment>
    );
  }
}
