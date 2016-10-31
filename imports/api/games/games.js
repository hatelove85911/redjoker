import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'
import {check} from 'meteor/check'
import {SimpleSchema} from 'meteor/aldeed:simple-schema'
import {CollectionHelpers} from 'meteor/dburles:collection-helpers'
import WinOrLose from '../../util/winOrLose.js'
import Factortypes from '../../util/factorTypes.js'

const Games = new Mongo.Collection('games')

const frameSchema = new SimpleSchema({
  seqNo: {type: Number},
  lord: {type: String},
  result: {allowedValues: WinOrLose},
  baseFactor: {type: String},
  additionFactors: [String],
  extraFactors:[String]
})

const commonFactorSchema = new SimpleSchema({
  id: {regEx: SimpleSchema.RegEx.Id},
  name: {type: String},
  win: {type: Number},
  lose: {type: Number}
})

const additionFactorSchema = new SimpleSchema([commonFactorSchema, {
  type: {allowedValues: Factortypes}
}])

Games.schema = new SimpleSchema({
  when: {type:Date },
  frames: {type:[frameSchema]},
  baseFactorSettings: {type:[commonFactorSchema]},
  additionFactorSettings: {type:[additionFactorSchema], optional: true },
  extraFactorSettings: {type:[commonFactorSchema], optional: true },
  players: {type: [String]}
})

Games.attachSchema(Games.schema)

export Games
