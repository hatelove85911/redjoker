import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
 
import App from '../imports/ui/App.jsx';
import Games from '../imports/ui/Games.jsx'
import GameSetting from '../imports/ui/GameSetting.jsx'
import Gaming from '../imports/ui/Games.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
 
Meteor.startup(() => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Games}></IndexRoute>
        <Route path="settingGame" component={GameSetting}></Route>
        <Route path="gaming" component={Gaming}></Route>
      </Route>
    </Router>
    , document.getElementById('mountnode'))
});
