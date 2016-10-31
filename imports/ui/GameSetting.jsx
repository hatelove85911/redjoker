import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

// Task component - represents a single player
export default class GameSetting extends Component {
  render() {
    return (
      <AppBar
          title="Game Setting"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    )
  }
}
