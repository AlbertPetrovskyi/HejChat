// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Don't exit the process, allow the server to run even without DB
    // process.exit(1); - Comment this out
    console.log('Server running without database connection');
  }
};

module.exports = connectDB;