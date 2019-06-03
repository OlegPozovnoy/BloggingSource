const express = require('express');
const app = express();

<<<<<<< Updated upstream
<<<<<<< Updated upstream
// Import our Page Routes
=======
// Importing the routes
>>>>>>> Stashed changes
=======
// Importing the routes
>>>>>>> Stashed changes
const pageRoutes = require('./routes/pages');

// Register our Page Routes with our app
app.use('/', pageRoutes);

// Export our changes
module.exports = app;