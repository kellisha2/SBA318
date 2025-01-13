const express = require('express')
const app = express()
const port = 5000;

const products = require('./data/products')
const employees = require('./data/employees')



app.get('/', (req, res) =>{
  res.send("Welcome to the Employee Portal")
})


app.get('/products', (req, res) =>{
  res.json(products)
}
)

app.get('/products/:name',(req,res) =>{
  res.send(`Hello, ${req.params.name}! Welcome to the Employee Portal`)
})

app.post('/products/:name' (req, res) => {
  res.redirect()
})




app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
})

