// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Add a root route handler
app.get('/', (req, res) => {
  res.json({ 
    message: 'Amogus API Server',
    endpoints: {
      users: '/api/users',
      airdrop: '/api/users/register-airdrop'
    }
  });
});

// Define Routes
app.use('/api/users', require('./routes/api'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));