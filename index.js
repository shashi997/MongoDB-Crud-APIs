const express = require("express");
const mongoose = require('mongoose')
// const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
require('dotenv').config()

const PORT = process.env.PORT || 8080 

const app = express()

// middlewares
// To pass Json to the Node.JS we add the middleware
app.use(express.json());
// configuring to accept form data to Node.JS with this middleware
app.use(express.urlencoded({extended: false}))

//  routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello World!!")
})




mongoose.connect(process.env.MongoDB_URI)
.then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}.`);
    })
})
.catch((error) => {
    console.log(error.message);
})


