var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Irina Krechetova Photo'});
});

/* GET pages */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Irina Krechetova Photo', page: 'Портфолио'});
});
router.get('/prices', function(req, res, next) {
  res.render('prices', { title: 'Irina Krechetova Photo',  page: 'Цены'});
});
router.get('/feedback', function(req, res, next) {
  res.render('feedback', { title: 'Irina Krechetova Photo', page: 'Отзывы'});
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Irina Krechetova Photo',  page: 'Обо мне'});
});
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Irina Krechetova Photo', page: 'Контакты'});
});

module.exports = router;
