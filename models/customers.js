/*
   customers.js
   Bohdan Drozd
   301280168
   My portfolio application
*/
let mongoose = require('mongoose');

let Customer = mongoose.Schema(
{
     Username: String,
     Email: String,
     Number: Number
},
{
    collection: "customers"
});

module.exports = mongoose.model('Customer', Customer);