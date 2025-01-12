const express = require('express')
const app = express()
const port = 5000;

const products = require('./data/products')
const employees = require('./data/employees')


app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`)
})

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








// const http = require ('http')
// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });

//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });