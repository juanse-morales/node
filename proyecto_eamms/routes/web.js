const express = require('express'),
passport = require('../config/passport.js'),
ae = require('../dao/controllers/ae'),
ph = require('../dao/controllers/ph'),
user = require('../dao/controllers/user');

module.exports = (function(){
  var router = express.Router();

  // HOME
  router.get("/dashboard", passport.isAuth, (req,res)=> res.render('home/dashboard', {user: req.user.toJSON()}));

  router.get("/layout",function(req,res){
    res.render('layout');
  });

  router.get('/sesion', (req,res)=>{
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
    res.send(`Has visto esta página: ${req.session.cuenta} `)
  });

  // AUTH
  router.get("/", (req,res)=> res.render('login'));
  router.post('/', user.login);
  router.post('/signup', user.signup);
  router.get('/logout', user.logout);
  router.get('/userInfo', passport.isAuth, (req,res)=> res.json(req.user));

  // AE
  router.get("/regae", passport.isAuth, ae.create);
  router.get("/listae",ae.list);
  router.get("/showae",ae.show);

  // INFO MANTTO
  router.get("/reginfo",function(req,res){
    res.render('infomantto/create');
  });

  // PROG MANTTO
  router.get("/showprog",function(req,res){
    res.render('progmantto/show');
  });

  // NOTF
  router.get("/listnotf",function(req,res){
    res.render('notf/list');
  });

  // PH
  router.get('/listph', ph.list);
  router.get('/ph/deleteAll',ph.deletePhs);
  router.post('/ph/store',ph.store);

  return router;
})();