const router = require('express').Router();
const { Customers } = require('../models');

router.get('/', async (req, res) => {

    res.render('login');
});


// Login
router.post('/', async (req, res) => {
    try {
      const dbUserData = await Customers.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      const validPassword = await dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }

      console.log('You are now logged in!');
      res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;