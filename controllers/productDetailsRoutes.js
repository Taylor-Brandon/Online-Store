const router = require('express').Router();
const { Products } = require('../models');

 router.get('/', async (req, res) => {

    res.render('product-details');

});



router.post('/',  async (req, res) => {

    try {

        const productsData = await Products.findOne({
              where: {
                       image: req.body.imgURL
                     }
        });
       
          // Serialize data so the template can read it
          const products = productsData.map((products) => products.get({ plain: true }));
          console.log(products);
          // Pass serialized data into template
          res.render('product-details', { 
            products
          });
        } catch (err) {
          res.status(500).json(err);
        }

});

module.exports = router;