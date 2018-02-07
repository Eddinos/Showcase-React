var React = require('react');
import { render } from 'react-dom'
import App from './components/App/App';
import routes from './routes'
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getProjects } from './reducers'
import { getAllProjects } from './actions'
injectTapEventPlugin();

const middleware = [ thunk ];
let store = createStore(getProjects, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))

store.dispatch(getAllProjects())

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
  ,
  document.getElementById('root')
);
