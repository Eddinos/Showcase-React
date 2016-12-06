import React from 'react';
import { Component } from 'react';
import s from './AppBar.scss';
import IconButton from 'material-ui/IconButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ViewHeadLine from 'material-ui/svg-icons/action/view-headline';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const style = {
  icon: {
    width: 48,
    height: 48
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
      bgColor: '',
      height: '5em'
    };
  }

  getChildContext () {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentDidMount() {
     window.addEventListener('scroll', () => {if(pageYOffset==0) {this.setState({bgColor: '', height:'5em'})}else {
       this.setState({bgColor: 'cyan', height: '3em'})
     }});
  }

  render () {
    return (
      <div className="appBar" style={{ backgroundColor: this.state.bgColor, height: this.state.height, transition: 'height 1s' }}>
        <IconButton
           className="menu-button"
           iconStyle={style.icon}
           style={style.medium}
        >
          <ViewHeadLine />
        </IconButton>
        <span className="nav-button">Banana</span>
      </div>
    );
  }
}

AppBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}
