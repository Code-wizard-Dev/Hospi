const mongoose = require("mongoose");
const colors = require("colors");

mongoose.set('strictQuery', false); 

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB Server Issue: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
