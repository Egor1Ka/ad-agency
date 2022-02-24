const {Schema, model, ObjectId} = require("mongoose")

const contract = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  summ: {type: Number, required: true}
})

  module.exports = model("contract", contract);