const { Schema, model } = require('mongoose');

const prodSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, min: 1, max: 100, required: true },
});

module.exports = model('Product', prodSchema);
