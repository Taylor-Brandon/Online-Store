const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

    try {
  
      const alllaptopsProductsData = await Products.findAll({
            where: {
                     page: "alllaptops"
                   }
      });
     
        // Serialize data so the template can read it
        const products = alllaptopsProductsData.map((products) => products.get({ plain: true }));
  
        // Pass serialized data into template
        res.render('alllaptops', { 
          products
        });
      } catch (err) {
        res.status(500).json(err);
      }
     
  });

module.exports = router;