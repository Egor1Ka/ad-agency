const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()
const PORT = config.get("serverPORT")

const start = async _ => {
  try {
    await mongoose.connect(config.get("dbURL"))


    app.listen(PORT, () => {
      console.log("Server has been started on PORT", PORT)
    })
  } catch (error) {
    
  }
}

start()