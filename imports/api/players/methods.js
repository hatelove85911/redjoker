import {Meteor} from 'meteor/meteor'
import {Players} from './players.js'

Meteor.methods({
  'players.insert' (name, avatar) {
    Players.insert({
      name,
      avatar
    })
  },
  'players.remove' (id) {
    Players.remove(id)
  }
})
