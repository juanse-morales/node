const Estudiante = require('../models/estudiante'),
      Estudiantes = require('../collections/estudiante');

module.exports = {
  
  // Controllers for routes web

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  list: function(req,res){
    Estudiantes.forge().fetch().then((collection)=>res.render('estudiantes/list',{estudiantes: collection.toJSON()}))
    .catch((err)=>res.status(500).json({error : true, message : err.message}))
  },

  /**
   * Store a newly created resource in storage.
   *
   * @param Request, Response
   * @return Response
   */
  store: function(req,res){
    Estudiante.forge({
      nombres    : req.body.nombres,
      apellidos  : req.body.apellidos
    })
    .save()
    .then(function(ae){
      res.redirect('/docente/estudiantes');
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        message : err.message
      })
    })
  }
}