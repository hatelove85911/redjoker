import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import { hashHistory } from 'react-router'

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
export default class GameSetting extends Component {
  createGame(event){
    hashHistory.push('settingGame')
    // event.preventDefault()
    // alert('create game')
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
            <ListItem primaryText="game1" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="game2" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="game3" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="game4" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="game5" rightIcon={<ActionInfo />}/>
          </List>
          <FloatingActionButton secondary={true} style={style} onClick={this.createGame}>
            <ContentAdd />
          </FloatingActionButton>
        </Paper>
      </div>
    )
  }
}
