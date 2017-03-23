var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req,res) {
  var newuser = new User({
    name : req.body.name,
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    gender : req.body.gender
  });
 
  User.find({ $or : [{username : req.body.username}, {email : req.body.email}]}, function(err,data) {
    if(err) throw err;
    else if(data.length){
      if(data[0].username == req.body.username){
        res.json({success: false, msg: "username already exists" });
      }
      else if(data[0].email == req.body.email){
         res.json({ success : false, msg: "email already exists" });
      }
    }
      else{
        newuser.save(function(err,doc){
          if(err) throw err;
          res.json({ success : true, msg: 'User Registered Successfully'});
        });
      }
  });
});

router.post('/login', function(req,res) {
  User.find({
      $and: [
          { $or: [{username : req.body.username}, {email: req.body.email}] },
          { password : req.body.password }
      ]
  }, function(err,data) {
    console.log(data);
      if(err) throw err;
      // else if(data[0].username || data[0].email == '' && data[0].password == '') {
      //   res.json({ success : false, msg : 'Invalid Credentials'});
      // }
      else if(data.length) {
        if(data[0].username != req.body.username && data[0].email != req.body.email) {
          res.json({ success : false, msg : 'Username and Email ID is wrong'})
        } 
        else if(data[0].password != req.body.password) {
          res.json({ success : false, msg : 'Password do not match'});
        }
        else if(data[0].username == req.body.username || data[0].email == req.body.email && data[0].password == req.body.password) {
          res.json({ success : true, msg : 'You are Logged in Successfully'});
        }
      }
  });
});




















// router.post('/login', function(req,res) {
//   User.find({
//       $and: [
//           { $or: [{username: req.body.username}, {email: req.body.email}] },
//           {password: req.body.password }
//       ]
//   }, function(err,data) {
//     if(err) throw err;
//     else if(data.length) {
//      if(data[0].username === '' || data[0].email === '') {
//        res.json({ success : false, msg : 'Invalid Credentials'})
//      }
//      else if (data[0].username != req.body.username || data[0].email != req.body.email) {
//        res.json({ success : false, msg : 'Username and Email ID is wrong'})
//      }
//      else if(data[0].password != req.body.password) {
//        res.json({ success : false, msg : 'Password do not match'})
//      }else {
//       res.json({ success: true, msg : 'You are logged in Successfully'})
//     }
//     } 
    
//   });
// });
module.exports = router;
