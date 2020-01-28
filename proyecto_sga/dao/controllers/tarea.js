const Tarea = require('../models/tarea'),
      Tareas = require('../collections/tarea');

module.exports = {
  
  // Controllers for routes web

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  list: function(req,res){
    Tareas.forge().fetch().then((collection)=>res.render('tareas/list',{tareas: collection.toJSON()}))
    .catch((err)=>res.status(500).json({error : true, message : err.message}))
  },

  list2: function(req,res){
    Tareas.forge().fetch().then((collection)=>res.render('tareas/list2',{tareas: collection.toJSON()}))
    .catch((err)=>res.status(500).json({error : true, message : err.message}))
  },
  
  /**
   * Store a newly created resource in storage.
   *
   * @param Request, Response
   * @return Response
   */
  store: function(req,res) {
    Tarea.forge({
      fecha         : req.body.fecha,
      asunto        : req.body.asunto,
      descripcion   : req.body.descripcion
    })
    .save()
    .then(function(ae){
      res.redirect('/docente/tareas');
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