const User = require('../models/user'),
Users = require('../collections/user'),
bcrypt = require('bcrypt-nodejs'),
passport = require('passport');

module.exports = {

  // Controllers for Routes Web

  signup : function(req, res, next){
    User.forge({username: req.body.username}).fetch().then((user)=>{
      if(user) return res.status(400).send('Username ya registrado, use otro');
      else {
        bcrypt.genSalt(10, (err,salt)=>{
          if(err) next(err);
          bcrypt.hash(req.body.password,salt,null,(err,hash)=>{
            if(err) next(err);
            User.forge({
              username      : req.body.username,
              password      : hash,
              nombres       : req.body.nombres,
              apellidos     : req.body.apellidos,
              privilegio    : req.body.privilegio,
              correo        : req.body.correo,
              telefono      : req.body.telefono,
              id_emp        : req.body.id_emp
            })
            .save()
            .then(function(user){
              res.render('login');
            })
            .catch(function(err){
              res.status(500)
              .json({
                error : true,
                data : {message : err.message}
              })
            })
          });
        });
      }
    }).catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : {message : err.message}
      })
    });
  },

  login : (req,res,next)=>{
    passport.authenticate('local', (err, usuario, info) => {
      if(err) next(err);
      if(!usuario) {
        console.log(info);
        return res.status(400).send(info.message)
      }
      req.logIn(usuario, (err)=>{
        if(err) next(err);
        res.render('home/dashboard',{user: usuario.toJSON()});
      })
    })(req,res,next);
  },

  logout : (req,res) => {
    req.logout();
    res.render('login');
  },

  // Controllers for Routes Crud for Angular.Js

  getUsers : function(req, res){
    Users.forge()
    .fetch()
    .then(function(collection){
      res.json({
        error : false,
        data : collection.toJSON()
      })
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : { message : err.message }
      })
    })
  },

  getUserById : function(req, res){
    User.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(user){
      if(!user){
        res.status(404)
        .json({
          error : true,
          message: 'File Not Found'
        })
      }else{
        res.send(user.toJSON());
      }
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        message : err.message
      })
    })
  },

  

  updateUser : function(req, res){
    User.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(user){
      user.save({
        username      : req.body.username     || user.get('username'),
        password      : req.body.password     || user.get('password'),
        nombres       : req.body.nombres      || user.get('nombres'),
        apellidos     : req.body.apellidos    || user.get('apellidos'),
        privilegio    : req.body.privilegio   || user.get('privilegio'),
        correo        : req.body.correo       || user.get('correo'),
        telefono      : req.body.telefono     || user.get('telefono'),
        id_emp        : req.body.id_emp       || user.get('id_emp')
      })
      .then(function(user){
        res.json({
          error : false,
          data : user.toJSON(),
          message : "Update successfully"
        })
      })
      .catch(function(err){
        res.json({
          error : true,
          data : {message : err.message}
        })
      })
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : {message : err.message}
      })
    })
  },

  deleteUser : function(req, res){
    User.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(user){
      user.destroy()
      .then(function(){
        res.json({
          error : false,
          data : { message : 'Deleted successfully'}
        })
      })
      .catch(function(err){
        res.status(500)
        .json({
          error : true,
          data : { message : err.message}
        })
      })
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : { message : err.message }
      })
    })
  }
}