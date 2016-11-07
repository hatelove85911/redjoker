import React from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
 
import App from '../imports/ui/App.js';
import GamesPage from '../imports/ui/GamesPage.js'
import GameSettingPage from '../imports/ui/GameSettingPage.js'
import GamingPage from '../imports/ui/GamingPage.js'
 
Meteor.startup(() => {
  render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GamesPage}></IndexRoute>
        <Route path="settingGame" component={GameSettingPage}></Route>
        <Route path="GamingPage" component={GamingPage}></Route>
      </Route>
    </Router>
    , document.getElementById('mountnode'))
});
