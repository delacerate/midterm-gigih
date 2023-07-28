const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Endpoint: Product List - ProductID
router.get('/product/:ProductID', async (req, res) => {
  try {
    const product = await productController.getProduct(req.params.ProductID);
    res.send(product);
  } catch (err) {
    // Handle errors
    res.status(500).send('Error fetching product.');
  }
});

module.exports = router;
