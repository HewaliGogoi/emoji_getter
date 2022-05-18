const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect("mongodb+srv://hewali:emojiconverter@cluster0.xeqvh.mongodb.net/emoji"); 

    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;