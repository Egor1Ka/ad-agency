const {Schema, model, ObjectId} = require("mongoose")

const advertiser = new Schema({
  email: {type: String, required: true, unique: true},
  login: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  type: {type: Number, required: true},
  avatar: {type: String},
  list_of_clients: [{type: ObjectId, ref:'contract'}],
  own_contracts: [{type: ObjectId, ref:'contract'}]
})

  module.exports = model("advertiser", advertiser)