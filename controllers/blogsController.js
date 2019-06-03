const Blog = require('../models/blog');

<<<<<<< Updated upstream
exports.index = (req, res) => {};

exports.show = (req, res) => {};

exports.drafts = (req, res) => {};

exports.published = (req, res) => {};

exports.new = (req, res) => {};

exports.create = (req, res) => {};
=======
exports.new = (req, res) => {
  res.render('blogs/new', {
    title: 'New Blog Post'
  });
};


exports.index = (req, res) => {
  Blog.find()
    .then(blogs => {
      res.render('blogs/index', {
        blogs: blogs,
        title: 'Archive'
      });
    })
    .catch(err => console.log(`ERROR: ${err}`));
};


exports.show = (req, res) => {

};

exports.create = (req, res) => {
  console.log("You are here");
  Blog.create(req.body.blog)
    .then(() => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(`ERROR: ${err}`);
    });
};

exports.drafts = (req, res) => {

};

exports.published = (req, res) => {

};
>>>>>>> Stashed changes
