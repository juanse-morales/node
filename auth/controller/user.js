const passport = require('passport'),
Usuario = require('../models/user');

exports.postSignup = (req,res,next) => {
  const nuevoUsuario = new Usuario({
    email: req.body.email,
    nombre: req.body.nombre,
    password: req.body.password
  });

  Usuario.findOne({email: req.body.email}, (err,usuarioExistente) => {
    if(usuarioExistente){
      return res.status(400).send('Ya ese email está registrado');
    }
    nuevoUsuario.save((err)=>{
      if(err){
        next();
      }
      req.logIn(nuevoUsuario, (err)=>{
        if (err) {
          next();
        }
        res.send('Usuario registrado exitosamente');
      });
    });
  });
}

exports.postLogin = (req,res,next)=>{
  passport.authenticate('local', (err, usuario, info) => {
    if(err){
      next(err);
    }
    if(!usuario){
      return res.status(400).send('Email o contraseña no válidos');
    }
    req.logIn(usuario, (err)=>{
      if(err){
        next(err);
      }
      res.send('Login exitoso');
    })
  })(req,res,next);
}

exports.logout = (req,res) => {
  req.logout();
  res.send('Logout exitoso');
}