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
  Blog.find().sort({'createdAt': -1}).exec( (err, docs) => {
    if (err) {
      console.error('ERROR in DB FIND POSTS', err);
    } else {
      // console.log('BLOG FIND DOCS', docs);
      cb(null, docs);
    }
  });
};

const patch = (id, cb) => {
  Blog.findOneAndUpdate({ _id: id }, { $inc: { views: 1 }}, { new: true }, (err, doc) => {
    if (err) {
      console.error('ERROR IN PATCH TO DB', err);
    } else {
      console.log('UPDATED VIEW DOC IS', doc);
      cb(null, doc);
    }
  });
};

const insert = (doc, cb) => {
  Blog.insertOne(doc, (err, doc) => {
    if (err) {
      console.error('ERROR IN INSERT TO DB', err);
    } else {
      console.log('Inserted DOC', doc);
      cb(null, doc);
    }
  });
}



module.exports = { Blog, find, patch };
