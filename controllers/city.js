var express = require('express')
var db = require('../models')
var router = express.Router()
const axios = require('axios')

// show all cities
router.get('/', function(req, res) {
    db.city.findAll()
    .then(function(cities) {
      res.render('city/index', { cities: cities })
    })
    .catch(err => {
      console.log(err)
    })
})

// GET route for show - display individual city
router.get('/:id', function(req, res) {
  db.city.findOne({
    where: { id: req.params.id },
    include: [{model: db.currency, attributes:['name']}], 
  })
  .then(function(city) {
    axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API}&symbols=${city.currencyName}`)
      .then(function (response) 
      { res.render('city/show', { city: city, response: response}) })
  })
  .catch(err => {
    console.log(err)
  })
})

// POST - add to watchlist
router.post('/:id/add', function(req, res) {
    db.city.update({
      userId: 1
    }, { where: {
        id: req.params.id }
    })
    .then(function(post) {
      res.redirect('/auth/watchlist')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router
