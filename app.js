require("dotenv").config();

const mongoose = require("mongoose");
const Person = require("./models/Person");

// Connect WITHOUT deprecated options
mongoose.connect(process.env.MONGO_URI);

// Confirm connection
mongoose.connection.once("open", () => {
  console.log("MongoDB connection successful");

  // STEP 6
  const person = new Person({
    name: "John Doe",
    age: 25,
    favoriteFoods: ["Rice", "Beans"],
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    console.log("Saved:", data);
  });
});