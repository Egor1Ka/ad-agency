const {Schema, model, ObjectId} = require("mongoose")

const client = new Schema({
  email: {type: String, required: true, unique: true},
  login: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  type: {type: Number, required: true},
  avatar: {type: String},
  client_contracts: [{type: ObjectId, ref:'contract'}]
})

  module.exports = model("client", client)