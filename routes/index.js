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

let mongoose = require('mongoose');
const { title } = require('process');

let Customer = require('../models/customers');


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
//Get Sign in
router.get('/sign_in',function(req,res,next)
{
   res.render('sign_in',{title: "Sign in"});
});

//Business contacts page
router.get('/business', (req, res, next) => {
   Customer.find( (err, customersList) => {
      if(err)
      {
         return console.error(err);
      }
      else
      {
         res.render('business', {title: "Business contacts", myList: customersList});
         //console.log(customersList);
      }
   });
});

//Get Update View
router.get('/update/:id', (req, res, next) => 
{
   let id = req.params.id;
   
   Customer.findById(id, (err, customersList)=> {
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else
      {
         res.render('updateview/update', {title: "Update Contact:", myList: customersList});
      }
   });
});

//POST retrieve new info from form in update view and send query to server
router.post('/update/:id', (req, res, next) => 
{
   let id = req.params.id;

   let updatecustomer = Customer({
      "_id": id,
      "Username": req.body.username,
      "Email": req.body.email,
      "Number": req.body.number
   });

   Customer.updateOne({_id: id,}, updatecustomer , (err) => 
   {
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else
      {
         res.redirect('/business');
      }
   });
});

// GET for delete customers from db
router.get('/delete/:id', (req, res, next) => 
{
   let id = req.params.id;

   Customer.remove({_id: id,}, (err) => 
   {
      if(err)
      {
         console.log(err);
         res.end(err);
      }
      else
      {
         res.redirect('/business');
      }
   })
});

module.exports = router;