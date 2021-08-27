const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    imageUrl: String,
    body: String,
    views: {type: Number, default: 0}
  },
  {
    timestamps: true
  }
);
const Blog = mongoose.model('Blog', blogSchema);

const find = (cb) => {
  Blog.find().exec( (err, data) => {
    if (err) {
      console.error('ERROR in BLOG FIND', err);
    } else {
      console.log('BLOG FIND DATA', data);
      cb(null, data);
    }
  });
};



module.exports = { Blog, find };
