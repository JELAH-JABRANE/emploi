const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const DATA_FILE = path.join(__dirname, 'data', 'products.json');

app.use(cors());
app.use(express.json());

function readData() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/products', (req, res) => {
  res.json(readData());
});

app.post('/api/products', (req, res) => {
  const products = readData();
  const newProduct = {
    id: Date.now().toString(),
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
  };
  products.push(newProduct);
  writeData(products);
  res.status(201).json(newProduct);
});

app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
