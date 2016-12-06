import React from 'react'
import { Link } from 'react-router'
import './NavLink.scss'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
