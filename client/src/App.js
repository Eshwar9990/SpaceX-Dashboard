import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  // For development
  // uri: 'http://localhost:5000/graphql'

  // For deployment
  uri: '/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <h1 align="center">EA SpaceX Dashboard</h1>
        <Route exact path="/" component={Launches} /> 
        {/*  exact key word will disable the partial matching criteria */}
        <Route exact path="/launch/:flight_number" component={Launch} /> 
      </div>

    </Router>
  </ApolloProvider>
);

export default App;
