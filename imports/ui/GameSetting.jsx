import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'
import IconButton from 'material-ui/IconButton'
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
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
  navBack(){
    hashHistory.goBack()
  }
  render() {
    return (
      <div>
        <AppBar
            title="Game Setting"
            iconElementLeft={<IconButton><NavigationBack /></IconButton>}
            onLeftIconButtonTouchTap={this.navBack}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
      <Paper style={paperStyle}>
        <div> this is game setting</div>
      <FloatingActionButton secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
      </Paper>
      </div>
    )
  }
}
