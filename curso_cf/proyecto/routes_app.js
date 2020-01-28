var express = require("express"),
Imagen = require("./models/imagenes"),
router = express.Router();

router.get("/",function(req,res){
  res.render("app/home");
});

/* REST Donde lo importante son los recursos nos las URL
Dos caracterísitcas principales:
- los recursos
- las acciones no están definidas por la URL sino por el método HTTP que las estás accesando 

GET: sirve para solicitar los archivos y mostrarlos
PUT: para actualizar
DELETE: para eliminar
POST: para crear  */

router.get("/imagenes/new",function(req,res){
  res.render('app/imagenes/new');
});

router.get("/imagenes/:id/edit",function(req,res){

});

router.route("/imagenes/:id")
  .get(function(req,res){
    Imagen.findById(req.params.id,function(err,imagen){
      console.log(imagen.title);
      //console.log(err.message);
      res.send("Hola");
      //res.render("app/imagenes/show",{image:imagen});
    });
  })
  .put(function(req,res){

  })
  .delete(function(req,res){

  });

router.route("/imagenes")
  .get(function(req,res){
    
  })
  .post(function(req,res){
    var data = {
      title: req.body.title
    }
    var imagen = new Imagen(data);
    imagen.save(function(err){
      if(!err){
        res.redirect("/app/imagenes/:"+imagen._id)
      }else{
        res.render(err);
      }
    });
  });

module.exports = router;