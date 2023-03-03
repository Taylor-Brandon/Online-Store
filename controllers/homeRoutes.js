const router = require('express').Router();
const { Customers, Products } = require('../models');

router.get('/', async (req, res) => {

  try {

    const homeProductsData = await Products.findAll({
          where: {
                   page: "home"
                 }
    });
   
      // Serialize data so the template can read it
      const products = homeProductsData.map((products) => products.get({ plain: true }));

      // Pass serialized data into template
      res.render('home', { 
        products
      });
    } catch (err) {
      res.status(500).json(err);
    }
   // res.render('home');
});




// Route for handling requests to /product-details/:id/home
router.get('/:id/home', (req, res) => {
  res.redirect('home');
});


module.exports = router;