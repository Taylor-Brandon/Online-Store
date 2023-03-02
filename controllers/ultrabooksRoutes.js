const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

    try {
  
      const ultrabooksProductsData = await Products.findAll({
            where: {
                     page: "ultrabooks"
                   }
      });
     
        // Serialize data so the template can read it
        const products = ultrabooksProductsData.map((products) => products.get({ plain: true }));
  
        // Pass serialized data into template
        res.render('ultrabooks', { 
          products
        });
      } catch (err) {
        res.status(500).json(err);
      }
     
  });

module.exports = router;