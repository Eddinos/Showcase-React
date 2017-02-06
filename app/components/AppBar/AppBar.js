import React from 'react';
import { Component } from 'react';
import { IndexLink } from 'react-router'
import s from './AppBar.scss';
import NavLink from '../NavLink/NavLink'
import IconButton from 'material-ui/IconButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ViewHeadLine from 'material-ui/svg-icons/action/view-headline';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
    this.state = {
      barStyle: {
        bgColor: '',
        height: '9em'
      }
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
  handleScroll () {
    this.setState((prevState, props) => {
      var newState = prevState;
      if (pageYOffset < 50) {
        newState.barStyle.bgColor = '';
        newState.barStyle.height = '9em';
      }
      else {
        newState.barStyle.bgColor = 'rgba(0, 255, 255, 0.8)';
        var height = screen.width < 480 ? '6em' : '3em';
        newState.barStyle.height = height;
      }
    })

  }

  render () {
    return (
      <div className="appBar" style={{
        backgroundColor: this.state.barStyle.bgColor,
        height: this.state.barStyle.height,
        transition: 'height 0.7s, background-color 0.5s'
       }}>
        <IconButton
           className="menu-button"
           iconStyle={style.icon}
           style={style.medium}
        >
          <ViewHeadLine />
        </IconButton>
        <div className="app-bar-navigation">
          <IndexLink activeClassName="active" to="/" className="nav-button">Home</IndexLink>
          <NavLink activeClassName="active" to="/pikachu" className="nav-button">Pika</NavLink>
          <span className="nav-button">Banana</span>
          {/* <span className="nav-button">Douze</span>
          <span className="nav-button">Mesures</span>
          <span className="nav-button">De Guerre</span> */}
        </div>

      </div>
    );
  }
}

AppBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}
