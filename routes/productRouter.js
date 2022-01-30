const router = require('express').Router()
const productCtl = require('../controllers/productCtrl')

// CRUD = POST, GET, PUT, DELETE
router.route('/')
    .get(productCtl.getAllProducts)
    .post(productCtl.createProduct)

router.route('/:id')
    .delete(productCtl.deleteProduct)
    .put(productCtl.updateProduct)
    .get(productCtl.getProduct)

module.exports = router