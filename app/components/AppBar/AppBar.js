import React from 'react';
import { Component } from 'react';
import { IndexLink } from 'react-router'
import s from './AppBar.scss';
import NavLink from '../NavLink/NavLink'
import IconButton from 'material-ui/IconButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ViewHeadLine from 'material-ui/svg-icons/action/view-headline';
import Clear from 'material-ui/svg-icons/content/clear';
import logo from '../../../tools/images/ed.png';



const style = {
  icon: {
    width: 48,
    height: 48,
    color: 'grey'
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  }
}

export default class AppBar extends Component {
  constructor(props) {
    super(props);
    let burgerStyleMedium = Object.assign({}, style.medium);
    let closeStyleMedium = Object.assign({display: 'none'}, style.medium);

    this.state = {
      barStyle: {
        bgColor: '',
        height: '9em'
      },
      burgerStyle: burgerStyleMedium,
      closeStyle: closeStyleMedium
    };
  }

  // Seems to be required w/ mui even if I'm just using an Icon
  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentDidMount() {
     window.addEventListener('scroll', () => { this.handleScroll(); });
  }

  // Trying not to mess with state object in case I make it richer later
  // Obviously I didnt understand how setState worked when i wrote that
  handleScroll () {
    this.setState((prevState, props) => {
      var newState = prevState;
      if (pageYOffset < 50) {
        newState.barStyle.bgColor = '';
        newState.barStyle.height = '9em';
      }
      else {
        newState.barStyle.bgColor = 'rgba(0, 255, 255, 0.8)';
        // Cte media query lulz
        var height = screen.width < 480 ? '6em' : '3em';
        newState.barStyle.height = height;
      }
    })

  }

  displayMobileMenu(show) {
    this.setState((state, props) => {
      state.burgerStyle.display = show ? 'none' : 'block';
      state.closeStyle.display = show ? 'block' : 'none';
      // I should improve this badly
      document.querySelector('.mobile-menu').style.display = show ? 'block' : 'none'
    })
  }

  render () {
    return (
      <div className="appBar" style={{
        backgroundColor: this.state.barStyle.bgColor,
        height: this.state.barStyle.height,
        transition: 'height 0.7s, background-color 0.5s'
       }}>
        <a href="/"  className="logo">
          <img src={logo} alt="edcorp" style={{height: this.state.barStyle.height}}/>
        </a>
        <div className="app-bar-navigation">
          <IndexLink activeClassName="active" to="/" className="nav-button">Home</IndexLink>

          <NavLink activeClassName="active" to="/portfolio" className="nav-button">Portfolio</NavLink>
          <NavLink activeClassName="active" to="/resume" className="nav-button">Resume</NavLink>

        </div>
        <div className="app-bar-nav-mobile">
          <IconButton
           className="menu-button--burger"
           iconStyle={style.icon}
           style={this.state.burgerStyle}
           onClick={() => {this.displayMobileMenu(true)}}
          >
            <ViewHeadLine />
          </IconButton>

          <IconButton
           className="menu-button--cross"
           iconStyle={style.icon}
           style={this.state.closeStyle}
           onClick={() => {this.displayMobileMenu(false)}}
          >
            <Clear />
          </IconButton>
        </div>
        <div className="mobile-menu">
          <div className="nav">
            <IndexLink onClick={() => {this.displayMobileMenu(false)}} activeClassName="active" to="/" className="nav-button">Home</IndexLink>

            <NavLink onClick={() => {this.displayMobileMenu(false)}} activeClassName="active" to="/portfolio" className="nav-button">Portfolio</NavLink>
            <NavLink onClick={() => {this.displayMobileMenu(false)}} activeClassName="active" to="/resume" className="nav-button">Resume</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

AppBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}
