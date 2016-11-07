import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import { hashHistory } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data';

// api
import {Games} from '../api/games/games.js'
import '../api/games/methods.js'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const paperStyle = {
  height: '100%'
}
// Task component - represents a single player
class GamesPage extends Component {
  createGame(event){
    hashHistory.push('settingGame')
  }
  renderGames(){
    return this.props.games.map(g=>{
      return <ListItem key={g._id} primaryText={g.when} rightIcon={<ActionInfo />}></ListItem>
    })
  }
  render() {
    return (
      <div>
        <AppBar
            title="Games"
            iconElementLeft={undefined}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <Paper style={paperStyle}>
          <List>
            {this.renderGames()}
          </List>
          <FloatingActionButton secondary={true} style={style} onClick={this.createGame}>
            <ContentAdd />
          </FloatingActionButton>
        </Paper>
      </div>
    )
  }
}
// wrapper
export default createContainer(()=>{
  Meteor.subscribe('games.all')
  return {
    games: Games.find({}).fetch()
  }
}, GamesPage)
