const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/apiKey');
// router.use(apiKeyMiddleware);
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page'});
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'});
});

router.get('/download', (req, res) => {
  res.download(path.resolve(__dirname)+ '/about.html');
});

router.get('/api/products',apiKeyMiddleware, (req, res) => {
  res.json([
    {
        id: 1,
        name: 'Product 1',
        price: 100
        },
        {
        id: 2,
        name: 'Product 2',
        price: 200
        },
        {
        id: 3,
        name: 'Product 3',
        price: 300
    }
  ])
});

module.exports = router;