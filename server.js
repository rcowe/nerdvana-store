// Importing the needed Modules
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = 3000;
const Products = require('./models/product.js');
const seedData = require('./data/seed.js');
const seed = require('./data/seed.js');

// Middleware
// Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('connected', () => {
  console.log('MongoDB is up-&-running');
});

// Routes (INDUCES)

// Index;
app.get('/nerdvana', (req, res) => {
  Products.find({}, (err, foundProducts) => {
    if (!err) {
      res.status(200).render('Index', {
        Products: foundProducts,
      });
    } else {
      res.status(400).send(err);
    }
  });
});

// adding data
app.get('/nerdvana/seed', (req, res) => {
  Products.create(seedData, (err) => {
    if (!err) {
      res.redirect('/nerdvana');
    } else {
      res.status(400).send(err);
    }
  });
});

// New
app.get('/nerdvana/newItem', (req, res) => {
  res.render('New');
});

// Delete
app.delete('/nerdvana/:id', (req, res) => {
  Products.findByIdAndDelete(req.params.id, (err, deletedProducts) => {
    if (!err) {
      res.redirect('/nerdvana');
    } else {
      res.status(400).send(err);
    }
  });
});

// Update
app.put('/nerdvana/:id', (req, res) => {
  Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProducts) => {
      if (!err) {
        res.redirect('/nerdvana');
      } else {
        res.status(400).send(err);
      }
    }
  );
});

// Create, post page
app.post('/nerdvana', (req, res) => {
  Products.create(req.body, (err) => {
    if (!err) {
      res.redirect('/nerdvana');
    } else {
      res.status(400).send(err);
    }
  });
});

// Edit
app.get('/nerdvana/:id/edit', (req, res) => {
  Products.findById(req.params.id, (err, foundProduct) => {
    if (!err) {
      res.status(200).render('Edit', {
        Product: foundProduct,
      });
    } else {
      res.status(400).send(err);
    }
  });
});

// Show
app.get('/nerdvana/:id', (req, res) => {
  Products.findById(req.params.id, (err, foundProduct) => {
    if (!err) {
      res.status(200).render('Show', {
        Product: foundProduct,
      });
    } else {
      res.status(400).send(err);
    }
  });
});

// //Seed, example;

// app.get('/nerdvana/seed/newproducts', async (req, res) => {
//   const newProducts = [
//     {
//       name: 'Beans',
//       description:
//         'A small pile of beans. Buy more beans for a big pile of beans.',
//       img:
//         'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
//       price: 5,
//       qty: 99,
//     },
//     {
//       name: 'Bones',
//       description: "It's just a bag of bones.",
//       img: 'http://bluelips.com/prod_images_large/bones1.jpg',
//       price: 25,
//       qty: 1,
//     },
//     {
//       name: 'Bins',
//       description: 'A stack of colorful bins for your beans and bones.',
//       img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
//       price: 7000,
//       qty: 1,
//     },
//   ];

//   try {
//     const seedItems = await Products.create(newProducts);
//     res.send(seedItems);
//   } catch (err) {
//     res.send(err.message);
//   }
// });

// App Listening on
app.listen(PORT, () => {
  console.log(`Saving the world on port ${PORT}`);
});
