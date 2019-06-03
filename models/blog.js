const mongoose = require('mongoose');

<<<<<<< Updated upstream
// Our Schema
=======
>>>>>>> Stashed changes
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED'],
    default: 'DRAFT'
  }
}, {
  timestamps: true
});

<<<<<<< Updated upstream
=======
// Query Helper
BlogSchema.query.drafts = function () {
  return this.where({
    status: 'DRAFT'
  });
};

BlogSchema.query.published = function () {
  return this.where({
    status: 'PUBLISHED'
  });
};

>>>>>>> Stashed changes
module.exports = mongoose.model('Blog', BlogSchema);