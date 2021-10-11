const express = require('express');
const bodyParser = require('body-parser');
const formdataParser = require('multer')().fields([])
const db = require('../database-mongodb/index.js');
const { Blogs, find, patch } = require('../database-mongodb/Blog.js');

const app = express();
const PORT = 3000;

app.use(formdataParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/blogs', function(req, res) {

  find( (err, data) => {
    if (err) {
      console.error('ERROR in find', err);
    } else {
      //console.log('DATA in SERVER', data);
      res.status(200).send(data);
    }
  });
});
// In your Express server, create a request handler that will respond to a PATCH request to the route /api/blogs/:blogId. Your request handler should find the blog post in the database with the corresponding _id, then increment that blog post's views counter.
// Use Express' route parameters to get the blogId out of your request URL.
app.patch('/api/blogs/:blogId', (req, res) => {
  //req.params;
  const _id = req.params.blogId.slice(7);
  patch(_id, (err, updatedDoc) => {
    if (err) {
      console.error('ERROR IN SERVER PATCH ROUTE', err);
    } else {
      console.log('UPDATED DOC IN SERVER ROUTE', updatedDoc);
      res.status(201);
      res.send(updatedDoc);
    }
  });
});
// In your Express server, create a request handler that will respond to a `POST` request to the route `/api/blogs/`. Your request handler should take the data sent in the body of the request, and use that data to create and save a new blog post to your database.
app.post('/api/blogs/', (req, res) => {
  //form data in req
  //insert(data, (err, success) => {
    // if (err) {
    //   console.error('ERROR IN SERVER INSERT ROUTE', err);
    // } else {
    //   console.log('UPDATED DOC IN INSERT ROUTE', updatedDoc);
    //   res.status(201);
    //   res.send(updatedDoc);
    // }
  // })

})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
