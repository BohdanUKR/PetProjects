var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
   res.render('index');
});

//Get About
router.get('/about', function(req,res,next)
{
   res.render('about');
});

//Get Services
router.get('/services',function(req,res,next)
{
  res.render('services');
});

//Get Contact
router.get('/contact',function(req,res,next)
{
   res.render('contact');
});

module.exports = router;