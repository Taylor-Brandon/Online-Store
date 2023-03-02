const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

    try {
  
      const macbookProductsData = await Products.findAll({
            where: {
                     page: "macbooks"
                   }
      });
     
        // Serialize data so the template can read it
        const products = macbookProductsData.map((products) => products.get({ plain: true }));
  
        // Pass serialized data into template
        res.render('macbooks', { 
          products
        });
      } catch (err) {
        res.status(500).json(err);
      }
     
  });

module.exports = router;