const Products = require('../models/productModel')

const productCtl = {
    getAllProducts: async (req, res) => {
        const products = await Products.find()

        res.json(products)
    },

    createProduct: async (req, res) => {
        const {product_id, title, images, description, content, colors, sizes, price} = req.body
        const product = await Products.findOne({product_id: product_id})
        if(product) {
            return res.status(400).json({msg: "The product already exists."})
        }

        const newProduct = new Products({
            product_id,
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })
        await newProduct.save()

        res.json({msg: 'create a product'})
    },

    deleteProduct: async (req, res) => {
        await Products.findByIdAndDelete(req.params.id)

        res.json({msg: 'delete a product'})
    },

    updateProduct: async (req, res) => {
        const {title, images, description, content, colors, sizes, price} = req.body
        await Products.findByIdAndUpdate({_id: req.params.id}, {
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })

        res.json({msg: 'update a product'})
    },

    getProduct: async (req, res) => {
        const product = await Products.findById(req.params.id)

        res.json(product)

        // res.json({msg: 'get a product'})
    },
}

module.exports = productCtl