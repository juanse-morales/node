const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt-nodejs'),
Usuario = require('../dao/models/user');

passport.serializeUser((usuario,done)=>done(null,usuario.id));
passport.deserializeUser((id,done)=>Usuario.forge({id:id}).fetch().then((user)=>done(null,user)).catch((err)=>done(err)));

passport.use(new LocalStrategy(
  (username,password,done)=>{
    Usuario.forge({
      username: username
    }).fetch().then(function(user){
      if (!user) {
        return done(null,false,{message:`Este username: ${username} no está registrado`});
      }
      else {
        bcrypt.compare(password,user.get('password'), (err,isEqual)=>{
          if (err) return done(err);
          if (isEqual) return done(null,user);
          else {
            return done(null,false,{message: 'La contraseña no es válida'});
          }
        })
      }
    }).catch((err)=> done(err));
  }
));

exports.isAuth = (req,res,next)=>{
  if (req.isAuthenticated()) return next();
  res.status(401).send('Sesión no iniciada');
}