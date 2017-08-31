var React = require('react');
import { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    var backgroundImg = props.backgroundImg || '';
    this.state = {
      bannerStyle: {
        backgroundImage: backgroundImg,
        backgroundColor: 'purple'
      }
    }
  }

  render () {
    return (
      <div className="banner" style={this.props}>
        <h1 className="container centered title">
          {this.props.title}
        </h1>
      </div>
    )
  }
}
