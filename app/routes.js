import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import Pikachu from './components/Pikachu/Pikachu'
import Home from './components/Home/Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/pikachu" component={Pikachu}/>
    {/*<IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>*/}
  </Route>
)
