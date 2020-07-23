const express = require('express');
const router = express.Router();
const db = require('../models');
// import middleware
const flash = require('connect-flash');
const passport = require("../config/ppConfig");
const { Op } = require("sequelize")
const axios = require('axios')

// register get route
router.get('/register', function(req, res) {
    res.render('auth/register');
})
// register post route
router.post('/register', function(req, res) {
    db.user.findOrCreate({
        where: {
            email: req.body.email
        }, defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }).then(function([user, created]) {
        // if user was created
        if (created) {
            console.log("User created! 🎉");
            passport.authenticate('local', {
                successRedirect: '/profile',
                successFlash: 'Thanks for signing up!'
            })(req, res);
        } else {
            console.log("User email already exists 🚫.");
            req.flash('error', 'Error: email already exists for user. Try again.');
            res.redirect('/auth/register');
        }
    }).catch(function(err) {
        console.log(`Error found. \nMessage: ${err.message}. \nPlease review - ${err}`);
        req.flash('error', err.message);
        res.redirect('/auth/register');
    })
})


// login get route
router.get('/login', function(req, res) {
    res.render('auth/login');
});

// login post route
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(error, user, info) {
        // if no user authenticated
        if (!user) {
            req.flash('error', 'Invalid username or password');
            console.log("💩butts")
            return res.redirect('/auth/login');
        }
        if (error) {
            return next(error);
        }

        req.login(user, function(error) {
            // if error move to error
            if (error) next(error);
            // if success flash success message
            req.flash('success', 'You are validated and logged in.');
            // if success save session and redirect user
            req.session.save(function() {
                return res.redirect('/profile');
            });
        })
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// GET route for watchlist
router.get('/watchlist', function(req, res) {
    db.city.findAll({
        include: [db.user, db.currency],
        where: { userId: {[Op.not]: null} },
    })
    .then(function(cities, city) {
//      cities.forEach(function(city) {
            axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API}&symbols=${cities.currencyName}`)
            .then(function (response) {
            res.render('auth/watchlist', { cities: cities, response: response, city: city}) 
            })
//      })
    // .then(function(cities) {
    //   res.render('auth/watchlist', { cities: cities, response: response })
    })
    .catch(err => {
      console.log(err)
    })
});

// POST route for watchlist to remove ticker
router.post('/watchlist/:id/remove', function(req,res) {
    db.city.update({
        userId: null
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

// export router
module.exports = router;