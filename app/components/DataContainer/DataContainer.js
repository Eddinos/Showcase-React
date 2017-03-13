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
      console.log('received');
      this.setState({data: response.data,
      ninos: React.cloneElement(this.props.children,
          { parentData: {carotte: 'kakaroto'} } )})
    })
    .catch((error) => {
      alert('alerte au gogol')
    })
    console.log('des');
  }

  render () {
    var that = this;
    // var renderedChildren = React.Children.map(this.props.children,
    //         function(child) {
    //
    //             // create a copy that includes addtional property values
    //             // as needed
    //             console.log('rendered ' + that.state.data);
    //             return React.cloneElement(child,
    //                 { parentData: that.state.data } );
    //         });
    //         console.log('rendered 3');
    //         console.log(renderedChildren);
  // console.log(that.state);
  // var ninos = React.cloneElement(this.props.children,
  //     { parentData: that.state.data } );
  //     console.log(ninos);
  console.log(this.state.ninos);
    return <div>{this.state.ninos}</div>
  }
}
