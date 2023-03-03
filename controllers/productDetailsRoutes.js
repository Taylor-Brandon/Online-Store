const router = require('express').Router();
const { Products } = require('../models');


 router.get('/', async (req, res) => {
    res.render('product-details');
});


router.get('/:id', async (req, res) => {

  try {
  const productData = await Products.findByPk(req.params.id);
   // Serialize data so the template can read it
   const product = productData.get({ plain: true });
   console.log(product);

  res.render('product-details', { 
    product 
  });
 
} catch (err) {
  res.status(500).json(err);
}
});


// Route for handling requests to /product-details/:id/home
router.get('/:id/home', (req, res) => {
  res.render('home');
});
/*
router.post('/', async (req, res) => {
  try {
    const productData = await Products.findOne({
      where: {
        image: req.body.imgURL
      }
    });

    // Serialize data so the template can read it
    const product = productData.get({ plain: true });
    console.log(product);
    console.log({...product});

    // Pass serialized data into template
    res.render('product-details', {
      ...product
    });

  } catch (err) {
    res.status(500).json(err);
  }
});
*/

module.exports = router;