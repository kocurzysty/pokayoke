const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Pokayoke Backend');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
