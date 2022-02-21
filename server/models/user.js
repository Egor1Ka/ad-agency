const {Shema, model, ObjectId} = require("mongoose")

const user = new Shema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  type: {type: Number, required: true},
  avatar: {type: String},
})

  module.exports = model("user", user)