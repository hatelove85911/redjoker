import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {check} from 'meteor/check'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import {Collection2} from 'meteor/aldeed:collection2'
import {CollectionHelpers} from 'meteor/dburles:collection-helpers'

const Players = new Mongo.Collection('players')

Players.schema = new SimpleSchema({
  name: {type: String},
  avatar: {type: String, optional: true}
})

Players.attachSchema(Players.schema)

export {Players}
