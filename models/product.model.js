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