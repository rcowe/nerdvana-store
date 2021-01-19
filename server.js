// Importing the needed Modules
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = 3000;
const Products = require('./models/product.js');
const seedData = require('./data/seed.js');

// Middleware
// Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// for me to check values are added:
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

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
        res.redirect('/nerdvana/:id');
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

// Buy Button
app.put('/nerdvana/:id/buy', (req, res) => {
  Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProducts) => {
      if (!err) {
        updatedProducts.qty -= 1;
        updatedProducts.save();
        res.status(200).redirect('/nerdvana');
      } else {
        res.status(400).send(err);
      }
    }
  );
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

// // Update
// app.put('/nerdvana/:id/buy', (req, res) => {
//   Products.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true },
//     { $inc: { qty: -1 } },
//     (err, boughtProducts) => {
//       if (!err) {
//         res.status(200).redirect('Show', {
//           Product: boughtProducts,
//         });
//       } else {
//         res.status(400).send(err);
//       }
//     }
//   );
// });

// App Listening on
app.listen(PORT, () => {
  console.log(`Saving the world on port ${PORT}`);
});
