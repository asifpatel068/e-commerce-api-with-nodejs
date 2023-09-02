const express = require('express');
const ProductRouter = express.Router();
const {getProductsByCategory, getProductDetails, postProduct,getAllProducts,deleteProduct} = require('../controllers/product.controller');

ProductRouter.get('/ByCategory/:categoryId', getProductsByCategory);

ProductRouter.get('/:productId', getProductDetails);

ProductRouter.get('/', getAllProducts);

ProductRouter.post('/', postProduct);

ProductRouter.delete('/:productId', deleteProduct);

module.exports = {ProductRouter};
