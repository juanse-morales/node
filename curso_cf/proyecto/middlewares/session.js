var User = require("../models/user").User;

/* Patrón de una función que representa un middleware: 
req: objeto de la solicitud, 
res: objeto de la respuesta,
next: función que representa el siguiente middleware */
module.exports = function(req,res,next){ 
  if(!req.session.user_id){
    res.redirect("/login")
  }else{
    User.findById(req.session.user_id,function(err,user){
      if(err) {
        console.log(err);
        res.redirect('/login');
      }
      else{
        res.locals = { user: user }
        // No se sabe cual es el siguiente middleware, pero esta manera de llamar next representa que nuestro middleware no alteró de ninguna manera el flujo de la petición
        next();
      }
    });
    
  }
}