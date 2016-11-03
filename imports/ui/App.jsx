import {Meteor} from 'meteor/meteor'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


injectTapEventPlugin();
 
// import UI components
// import Player from './Player.jsx';
// import Games from './Games.jsx';

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
    var path = this.props.location.pathname

    return (
      <MuiThemeProvider>
        <div id="app">
          <ReactCSSTransitionGroup transitionName="pageSlider">
            {React.cloneElement(this.props.children, { key: path })}
          </ReactCSSTransitionGroup>
        </div>
      </MuiThemeProvider>
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
