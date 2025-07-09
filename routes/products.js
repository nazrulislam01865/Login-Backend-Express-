const router = require('express').Router();


router.get('/products', (req, res) => {
  res.render('products', {
    title: 'Product Page'});
});



module.exports = router;