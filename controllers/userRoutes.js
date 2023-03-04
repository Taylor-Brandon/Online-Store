const router = require('express').Router();

const { Customers } = require('../models');



router.get('/', async (req, res) => {
res.send("In user routes");
});


router.post('/', async (req, res) => {
   console.log("In userRoutes.js");
   console.log(req.body);

  try {
    const customerData = await Customers.create(req.body);

   req.session.save(() => {
     req.session.user_id = customerData.id;
     req.session.firstname = customerData.firstname;
     req.session.lastname = customerData.lastname;
     req.session.logged_in = true;
   });

    console.log(req.session);
    res.status(200).json(customerData);
  // res.render('home', {
  //  logged_in: req.session.logged_in,
  //  firstname: req.session.firstname,
  // lastname: req.session.lastname
  // });
  
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



module.exports = router;