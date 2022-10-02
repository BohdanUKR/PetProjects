var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
   res.render('partial/index');
});
//Get About
router.get('/partial/about', function(req,res,next)
{
   res.render('partial/about');
});
//Get Services
router.get('/partial/services',function(req,res,next)
{
  res.render('partial/services');
});

module.exports = router;
