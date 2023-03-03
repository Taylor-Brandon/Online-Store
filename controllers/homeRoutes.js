const router = require('express').Router();
const { Customers, Products } = require('../models');
//const withAuth = require('../utils/auth');


/*
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
*/


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


router.post('/',  async (req, res) => {
console.log(typeof req.body.imgURL);
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