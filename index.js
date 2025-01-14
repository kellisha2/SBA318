const fs = require('fs')
const express = require('express')
const app = express()
const port = 5000;


const products = require('./data/products')
const employees = require('./data/employees')

const error = require("./utilities/error");

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

// Set the directory where your EJS files are located
app.set('views', 'views');


app.get('/', (req, res) =>{
  res.render('index')
})

app.get('/products', (req, res) =>{
  res.render('products', {products: products.default})
})

app.get('/products/:name',(req,res) =>{
  res.send(`Hello, ${req.params.name}! Welcome to the Employee Portal`)
})

app.get('/add-product', (req, res) => {
  res.render('add-product');
})


app.post('/add-product', (req, res) => {
  const {category, color, image, inventory} = req.body;
  const product = {
    id: Math.floor(Math.random() * 5000),
    category,
    color,
    image,
    inventory
  }
  products.default.push(product);
  res.redirect('/products');
})


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
})

