var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080
var compression = require('compression');
import { match, RouterContext } from 'react-router';
import routes from './app/routes';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './app/reducers'

import React from 'react'
import { renderToString } from 'react-dom/server'

const middleware = [ thunk ];
let store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      )
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404);
      res.send(render404());

    }
  })
});

function render404 () {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Eddine shows off</title>
      <link rel="icon" type="img/ico" href="\ed.ico">
      <style>
        .msg404 {
          position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 5em;font-family: 'Century Gothic'
        }
        a {color: #373277}
      </style>
    </head>
    <body>
      <div class="msg404">
        <div>You've met with a terrible fate haven't you ?</div>
        <a href="/">Get back home</a>
      </div>
    </script>
  </body>
  </html>
   `
}

function renderPage(appHtml) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Eddine shows off</title>
      <link rel="icon" type="img/ico" href="/ed.ico">
      <link href='//fonts.googleapis.com/css?family=Galada' rel='stylesheet'>
    </head>
    <body>
      <div id='root'/>
      <script src="/bundle.js"></script>

    </script>
  </body>
  </html>
   `
}

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
