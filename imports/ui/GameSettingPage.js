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
import { createContainer } from 'meteor/react-meteor-data';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

// api
import {Games} from '../api/games/games.js'
import '../api/games/methods.js'

import {Players} from '../api/players/players.js'
import '../api/players/methods.js'

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

const chipStyles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class GameSettingPage extends Component {
  constructor() {
    super()

    this.state = {
      pickedPlayers: [{name: 'abao'}]
    }

    this.pickPlayer = this.pickPlayer.bind(this)
  }
  navBack(){
    hashHistory.goBack()
  }
  pickPlayer(event, checked){
    this.state.pickedPlayers.push({name: 'junshen'})
    this.setState(this.state.pickedPlayers)
  }
  renderPlayers() {
    return this.props.players.map(p=>{
      return <ListItem primaryText={p.name} leftCheckbox={ React.cloneElement(<Checkbox onCheck={this.pickPlayer}/>, {player: p.name} ) }> </ListItem>
    })
  }
  render() {
    return (
      <div>
        <AppBar
            title="Game Setting"
            iconElementLeft={<IconButton><NavigationBack /></IconButton>}
            onLeftIconButtonTouchTap={this.navBack}
          />

        <Paper style={paperStyle}>
          <div style={chipStyles.wrapper}>
            {this.state.pickedPlayers.map(p=>(<Chip style={chipStyles.chip}>{p.name}</Chip>))}
          </div>
        </Paper>

        <Paper style={paperStyle}>
          <List>
          {this.renderPlayers()}
          </List>
        </Paper>

        <FloatingActionButton secondary={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

// wrapper
export default createContainer(()=>{
  Meteor.subscribe('players.all')
  return {
    players: Players.find({}).fetch()
  }
}, GameSettingPage)
