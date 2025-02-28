const express = require('express')
const router = express.Router()
// const Product = require('../models/product.model.js')
const {getProducts, getOneProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts)

router.get('/:id', getOneProduct)

router.post('/', createProduct)

// Update Product
router.put('/:id', updateProduct)

// delete Product
router.delete('/:id', deleteProduct)

module.exports = router