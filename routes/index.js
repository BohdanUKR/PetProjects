/*
<!-- 
    Index page js
    Bohdan
    301280168
    October 4 2022
-->
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
   res.render('index',{title: "Home Page"});
});

//Get About
router.get('/about', function(req,res,next)
{
   res.render('about',{title: "About"});
});
//Get Projects
router.get('/projects',function(req,res,next)
{
   res.render('projects',{title: "Projects"});
});
//Get Services
router.get('/services',function(req,res,next)
{
  res.render('services',{title: "Services"});
});

//Get Contact
router.get('/contact',function(req,res,next)
{
   res.render('contact',{title: "Contacts"});
});

module.exports = router;