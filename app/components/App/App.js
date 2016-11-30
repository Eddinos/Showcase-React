import React from 'react';
import { Component } from 'react';
import './App.scss';
import Layout from '../Layout/Layout';
import { Link } from 'react-router'

var LayoutComp = (
  <Layout className="layout">
    <Link to="/pikachu"><div className="content" style={{backgroundColor: 'blue'}}>
      Who am i
    </div></Link>
    <div className="content" style={{backgroundColor: 'yellow'}}>
      What I do
    </div>
    <div className="content" style={{backgroundColor: 'white'}}>
      Miscellaneous
    </div>
    <div className="content" style={{color: 'white', backgroundColor: 'black'}}>
      Contact me
    </div>
  </Layout>
)

export default class App extends Component {
  render () {
    return (
      <div className="App">

        {this.props.children || LayoutComp}
      </div>


    );
  }
}
