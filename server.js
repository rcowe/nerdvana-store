// Importing the needed Modules
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = 3000;
const Product = require('./models/product');

// Middleware
// Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({ extended: true })); // form data
app.use(express.json()); // raw json data
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('connected', () => {
  console.log('MongoDB is up-n-running');
});

// Routes (INDUCES)

// Index
app.get('/nerdvana', (req, res) => {
  Product.find({}, (err, foundProducts) => {
    if (!err) {
      res.status(200).render('Index', {
        Product: foundProducts,
      });
    } else {
      res.status(400).send(err);
    }
  });
});

// New
app.get('/nerdvana/newItem', (req, res) => {
  res.render('New.jsx');
});

// Delete
app.get('/nerdvana/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, deletedProducts) => {
    if (!err) {
      res.status(200).render('Index', {
        Product: foundProducts,
      });
    } else {
      res.status(400).send(err);
    }
  });
});

// Update

// Create

// Edit

// Show

// App Listening on
app.listen(PORT, () => {
  console.log(`Saving the world on port ${PORT}`);
});
