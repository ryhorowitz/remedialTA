const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongodb/index.js');
const { Blogs, find } = require('../database-mongodb/Blog.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/blogs', function(req, res) {

  find( (err, data) => {
    if (err) {
      console.error('ERROR in find', err);
    } else {
      console.log('DATA in SERVER', data);
      res.status(200).send(data);
    }
  });
  //You should use the Mongoose model exported by Blog.js to fetch all of the blogs from the database.

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
