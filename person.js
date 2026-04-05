const mongoose = require("mongoose");

// Define schema for Person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is mandatory
  },
  age: Number,
  favoriteFoods: [String], // Array of strings
});

// Create model from schema
const Person = mongoose.model("Person", personSchema);

// Export model
module.exports = Person;