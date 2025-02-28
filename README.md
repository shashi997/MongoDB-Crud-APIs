# MongoDB CRUD API"S 

## Dependencies :- dotenv, express, mongoose

1. Connect to the MongoDB Atlas Cluster in the cloud with the express Application and then run the server is a better choice. 

```
Setup dotenv - require('dotenv').config()
```

### Connect the Application with mongoose and then run the server

```
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
```

2. Create models, schemas for storing the data in the database 

- Create the model for the reuired schema in models (ex:- product models product.model.js)

- create the Crud Api's that use this model for interacting and modifying data within the database

### The code for the model's (Product)

```
const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, `Please enter product name`],
        },
        price: {
            type: Number,
            required: [true, "Please enter product price"],
            default: 0,
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product
```

3. For Better, clean and clear code we seperate the code as routes, controllers.

### The route setup via middleware 

```
//  routes
app.use('/api/products', productRoute);
```

- Set up the routes

```
const express = require('express')
const router = express.Router()

const {getProducts, getOneProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts)

router.get('/:id', getOneProduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router
```

4. The Controller's code for the actions that the api do in them as function and return them and use it in routes.

```
const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {...logic}

const getOneProduct = async (req, res) => {...logic}

const createProduct = async (req, res) => {...logic}

const updateProduct = async (req, res) => {...logic}

const deleteProduct = async (req, res) => {...logic}


module.exports = {
    getProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
```

5. ### Some Additional Notes

- Node-Js application by default does not accept json data, and also the form data to accept we need to set up the middlewares.

```
// middlewares
// To pass Json to the Node.JS we add the middleware
app.use(express.json());
// configuring to accept form data to Node.JS with this middleware
app.use(express.urlencoded({extended: false}))
```

## This can be used for the reference for creating the MongoDB crud API's.