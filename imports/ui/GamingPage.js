import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

// Task component - represents a single player
export default class GameSetting extends Component {
  render() {
    return (
      <div>
        <AppBar
            title="Setting"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <Paper>
          <FloatingActionButton secondary={true} style={style} onClick={this.createGame}>
            <ContentAdd />
          </FloatingActionButton>
        </Paper>
      </div>
    )
  }
}
