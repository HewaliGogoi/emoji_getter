const mongoose = require("mongoose");

const textPage = new mongoose.Schema({
    text : {type: String, required: true}
})

const Text = mongoose.model("text", textPage);
module.exports = Text;