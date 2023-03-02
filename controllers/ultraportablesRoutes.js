const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

    try {
  
      const ultraportablesProductsData = await Products.findAll({
            where: {
                     page: "ultraportables"
                   }
      });
     
        // Serialize data so the template can read it
        const products = ultraportablesProductsData.map((products) => products.get({ plain: true }));
  
        // Pass serialized data into template
        res.render('ultraportables', { 
          products
        });
      } catch (err) {
        res.status(500).json(err);
      }
     
  });

module.exports = router;