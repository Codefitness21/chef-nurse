//This sets up a db connection function for a MongoDB db using Mongoose


const mongoose = require('mongoose')

//Defines async function called connectDB taht will handle the database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB