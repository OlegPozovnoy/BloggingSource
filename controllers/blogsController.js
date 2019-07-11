const Blog = require('../models/blog');
const mongoose = require('mongoose');

exports.index = (req, res) => {
  req.isAuthenticated();

  Blog.find({
      author: req.session.userId
    })
    .populate('author')
    .then(blogs => {
      res.render('blogs/index', {
        blogs: blogs,
        title: 'Archive'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/blogs/new');
    });
};


exports.show = (req, res) => {
  req.isAuthenticated();

  Blog.findOne({
      _id: req.params.id,
      author: req.session.userId
    })
    .then(blog => {
      res.render('blogs/show', {
        blog: blog,
        title: blog.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/blogs/new');
    });
};


exports.drafts = (req, res) => {
  req.isAuthenticated();

  Blog.find({
      author: req.session.userId
    }).drafts()
    .then(drafts => {
      res.render('blogs/index', {
        blogs: drafts,
        title: 'Drafts'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/blogs/new');
    });
};


exports.published = (req, res) => {
  req.isAuthenticated();

  Blog.find({
      author: req.session.userId
    }).published()
    .then(published => {
      res.render('blogs/index', {
        blogs: published,
        title: 'Published'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/blogs/new');
    });
};


exports.new = (req, res) => {
  req.isAuthenticated();

  res.render('blogs/new', {
    title: `New Blog Post`
  });
};


exports.create = async (req, res) => {
  req.isAuthenticated();

  // Add the current author to the blog
  req.body.blog.author = req.session.userId;

  Blog.create(req.body.blog)
    .then(() => {
      req.flash('success', 'New blog was created successfully.');
      res.redirect('/blogs');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/blogs/new');
    });
};


exports.edit = (req, res) => {
  req.isAuthenticated();

  Blog.findOne({
      _id: req.params.id,
      author: req.session.userId
    })
    .then(blog => {
      res.render('blogs/edit', {
        title: `Edit ${blog.title}`,
        blog: blog
      })
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};


exports.update = (req, res) => {
  req.isAuthenticated();

  Blog.updateOne({
      _id: req.body.id,
      author: req.session.userId
    }, req.body.blog, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The blog was updated successfully.');
      res.redirect('/blogs');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/blogs/${req.body.id}/edit`);
    });
};


exports.destroy = (req, res) => {
  req.isAuthenticated();

  Blog.deleteOne({
      _id: req.body.id,
      author: req.session.userId
    })
    .then(() => {
      req.flash('success', 'The blog was deleted successfully.');
      res.redirect('/blogs');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/blogs`);
    });
};