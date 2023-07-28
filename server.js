require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const videoRoutes = require('./src/routes/videoRoutes');
const productRoutes = require('./src/routes/productRoutes');
const commentRoutes = require('./src/routes/commentRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api', videoRoutes);
app.use('/api', productRoutes);
app.use('/api', commentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
