const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const orderRoutes = require('./order_route');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from the root directory
app.use(express.static(__dirname));
app.use(express.json());  // Enable JSON parsing for POST requests
app.use('/api', orderRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/delight_orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Connection Error:', err));

// Serve the HTML page correctly
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'bloom.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
