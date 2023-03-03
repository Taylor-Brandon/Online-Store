const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('product-details');
});

module.exports = router;

// const router = require('express').Router();

// // define an array of laptop names
// const laptops = [{name: 'laptop A', ourPrice: 1000 }, {name: 'laptop B', ourPrice: 1200 }, {name: 'laptop C', ourPrice: 1500 }];

// async function fetchEbayPrice(name) {
//     try {
//         // const response = await axios('https://www.ebay.com/sch/i.html?_from=R40&nkw=4k+smart+tv&sacat=0&pgn=1');

//         const response = await axios.get('https://api.ebay.com/buy/browse/v1/item/', {
//             params: {
//                 q: name,
//                 // other any requried params 
//             },
//             headers: {
//                 'Authorization': 'Bearer v^1.1#i^1#d^2024-08-24T02:30:31.000Z#I^3#r^0#f^0#p^3#t^Ul4xMF84Ojk1Mzk4MTFDMDY5RUQxRTYxN0JDMUUyQUI0NUQ4NTcyXzNfMSNFXjEyODQ=',
//             }
//         });
//         return $3000;
        
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

// // loop through each laptop name to fetch ebay prices
// async function fetchAllEbayPrices() {
//     for (let i = 0; i < laptops.length; i++) {
//         const ebayPrice = await fetchEbayPrice(laptops[i].name);
//         laptops[i].ebayPrice = ebayPrice;
//     }
// }

// router.get('/', async (req, res) => {
//     await fetchAllEbayPrices();
//     res.render('laptops', {laptops: laptops });
//     res.render('product-details', {laptops: laptops });
// });

// module.exports = router;