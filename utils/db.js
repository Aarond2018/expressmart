require('dotenv').config();

const mongoose = require("mongoose")

const connectDb = async () => {
  await mongoose.connect(`mongodb+srv://aarondamilola:${process.env.DB_PASSWORD}@cluster0.enhare5.mongodb.net/?retryWrites=true&w=majority`)
}

module.exports = connectDb 