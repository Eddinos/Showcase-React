var React = require('react');
import { render } from 'react-dom'
import App from './components/App/App';
import routes from './routes'
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
