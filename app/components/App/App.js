import React from 'react';
import { Component } from 'react';
import './App.scss';
import Layout from '../Layout/Layout';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout className="layout">
          <div className="content">
            Oui, très bien
          </div>
        </Layout>
      </div>
    );
  }
}
