const sequelize = require('../config/connection');
const { Customers, Products } = require('../models');

const customersSeedData = require('./customersSeedData.json');
const productsSeedData = require('./productsSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const customers = await Customers.bulkCreate(customersSeedData);
  const products = await Products.bulkCreate(productsSeedData);

   console.log(customers);
   console.log(products);
  /* 
  for (const { id } of drivers) {
    // Need to include a valid driver_id when creating a license
    const newLicense = await License.create({
      driver_id: id,
    });
  }
  */

  process.exit(0);
};

seedDatabase();