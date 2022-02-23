const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const auth_router = require("./routes/auth.routes");
const app = express();
const PORT = config.get("serverPORT");

app.use(express.json());
app.use("/api/auth", auth_router);

const start = async _ => {
  try {
    await mongoose.connect(config.get("dbURL"));


    app.listen(PORT, () => {
      console.log("Server has been started on PORT", PORT);
    })
  } catch (error) {
    
  }
}

start();