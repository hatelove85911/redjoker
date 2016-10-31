import {Meteor} from 'meteor/meteor'
import {Games} from './games.js'

Meteor.methods({
  'games.insert'(game) {
    Games.insert(game)
  },
  'games.addFrame'(id, frame) {
    Games.findOne(id).update({
      $push: {
        frames: frame
      }
    })
  }
})
