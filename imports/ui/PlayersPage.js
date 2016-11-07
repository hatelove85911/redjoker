import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react';


// Task component - represents a single player
export default class Player extends Component {
  deleteThisPlayer() {
    Meteor.call('players.remove', this.props.player._id)
  }
  render() {
    return (
      <li>
        <button className="delete," onClick={this.deleteThisPlayer.bind(this)}>&times;</button>
        <input type="checkbox" checked="this.props.player.checked"></input>
        <span>{this.props.player.name}</span>
      </li>
    );
  }
}
