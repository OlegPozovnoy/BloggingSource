const express = require('express');
const app = express();

<<<<<<< Updated upstream
// Import our Page Routes
=======
// Importing the routes
>>>>>>> Stashed changes
const pageRoutes = require('./routes/pages');
const blogsRoutes = require('./routes/blogs');

// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/blogs', blogsRoutes);

// Export our changes
module.exports = app;