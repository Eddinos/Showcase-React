import React from 'react';
import { Component } from 'react';
import './App.scss';
import Layout from '../bonds/Layout/Layout';
import Home from '../pages/Home/Home';

export default class App extends Component {
  render () {
    return (
      <Layout className="layout">
        {this.props.children || <Home/>}
      </Layout>
    );
  }
}
