import React from 'react';
import { Component, PropTypes } from 'react';

export default class Project extends Component {
  constructor (props) {
    super(props);

    this.state = {
      projectID: props.params.projectID,
      query: props.location.query
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({projectID: nextProps.params.projectID});
  }

  render () {
    return (
      <div className="project">
        Project #{this.state.projectID}
        et donc {this.props.parentData}
      </div>
    )
  }
}
