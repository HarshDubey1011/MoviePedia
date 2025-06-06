require("dotenv").config();
const mongoose = require("mongoose");

//const password = process.argv[2];

//const url = `mongodb+srv://fullstack:${password}@practice.lylwpda.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Practice`;

mongoose.set("strictQuery", false);

const phoneBookSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 5,
    required: true,
  },
  number: Number,
});

module.exports = mongoose.model("PhoneBook", phoneBookSchema);
