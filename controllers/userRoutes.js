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

   // req.session.save(() => {
     // req.session.user_id = customerData.id;
    //  req.session.logged_in = true;

     // res.status(200).json(customerData);
   // });
    res.status(200).json(customerData);
  
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
    
  }
});


module.exports = router;