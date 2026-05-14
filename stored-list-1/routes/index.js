var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  const list = [
    { text: 'Pizza' },
    { text: 'Ice Cream' },
    { text: 'Chips' },
    { text: 'Chocolate' },
    { text: 'Cookies' },
    { text: 'Candy' },
    { text: 'Soda' },
    { text: 'Popcorn' },
    { text: 'Pretzels' },
    { text: 'Nuts' },
    { text: 'Fruit Snacks' },
    { text: 'Granola Bars' },
    { text: 'Trail Mix' }
  ];

  res.render('index', {
    title: 'Favorite Snacks',
    list: list
  });
});

module.exports = router;