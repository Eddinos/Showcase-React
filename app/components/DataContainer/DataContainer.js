import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export default class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentWillMount () {
    var that = this;
    var url = this.props.url;
    axios.get(url)
    .then((response) => {
      let ninos = React.Children.map(this.props.children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { parentData: response.data })
        }
      })
      this.setState({data: response.data,
      ninos: ninos})
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  render () {
    return <div>{this.state.ninos}</div>
  }
}
