import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
 
// import UI components
import Player from './Player.jsx';
import GameSetting from './GameSetting.jsx';

// import api
import {Players} from '../api/players/players.js'
import '../api/players/methods.js'

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: ''
    }
  }
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Meteor.call('players.insert', name)
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  handleSearch(event) {
    this.setState({
      searchString: event.target.value
    })
  }
  renderPlayers() {
    let filteredPlayers = this.props.players

    if(this.state.searchString.trim() !== '') {
      let searchRegex = new RegExp(this.state.searchString, 'i')
      filteredPlayers = this.props.players.filter(player => {
        return searchRegex.test(player.name)
      })
    }

    return filteredPlayers.map((player) => (
      <Player key={player._id} player={player} />
    ));
  }
 
  render() {
    return (
      <MuiThemeProvider>
        <GameSetting></GameSetting>
      </MuiThemeProvider>
      // <div className="container">
      //   <header>
      //     <h1>Player List</h1>
      //     <label htmlFor="search">search</label>
      //     <input type="text" name="search" value={this.state.searchString} onChange={this.handleSearch.bind(this)}></input>
 
      //     <form className="new-player" onSubmit={this.handleSubmit.bind(this)} >
      //       <input
      //         type="text"
      //         ref="textInput"
      //         placeholder="Type to add new player"
      //       />
      //     </form>
      //   </header>
      // </div>
    );
  }
}

// App wrapper
export default createContainer(()=>{
  Meteor.subscribe('players.all')
  return {
    players: Players.find({}).fetch()
  }
}, App)
