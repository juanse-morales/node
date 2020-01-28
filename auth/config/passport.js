const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
Usuario = require('../models/user');

passport.serializeUser((usuario,done)=>{
  done(null,usuario.id);
});

passport.deserializeUser((id,done)=>{
  Usuario.findById(id,(err,usuario)=>{
    done(err,usuario);
  });
});

passport.use(new LocalStrategy(
  {usernameField:'email'},
  (email,password,done)=>{
    Usuario.findOne({email},(err,usuario)=>{
      if(!usuario){
        return done(null,false,{message:`Este email: ${email} no está registrado`});
      }else{
        usuario.compararPassword(password,(err,isEquals)=>{
          if(isEquals){
            return done(null,usuario);
          }else{
            return done(null,false,{message: 'La contraseña no es válida'});
          }
        });
      }
    });
  }
));

exports.isAuth = (req,res,next)=>{
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Tienes que hacer login para acceder a este recurso');
}