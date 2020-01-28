const Asistencia = require('../models/asistencia'),
      Asistencias = require('../collections/asistencia');

module.exports = {

  // Controllers for routes Webs

  /**
   * Store a newly created resource in storage.
   *
   * @param Request, Response
   * @return Response
   */
  store: function(req,res){
    Asistencia.forge({
      estudiante_id : req.body.estudiante_id
    }).save().then(function(ae){
      res.redirect('/home');
    }).catch(function(err){
      res.status(500).json({
        error : true,
        message : err.message
      })
    })
  },

  check: function(req,res){
    Asistencia.forge({
      estudiante_id : req.body.estudiante_id
    }).fetch().then(function(as){
      if(as){ res.send('Estudiante asistió'); }
      else { res.send('Estudiante NO asistió'); }
    }).catch(function(err){
      res.status(500).json({
        error : true,
        message : err.message
      })
    })
  }
}