import React from 'react';
import { Component } from 'react';
import './App.scss';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';

export default class App extends Component {
  render () {
    return (
      <Layout className="layout">
        {this.props.children || <Home/>}
      </Layout>
    );
  }
}
