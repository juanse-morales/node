var Pieza = require('../models/pieza');
var Piezas = require('../collections/pieza');

module.exports = {

  getPiezas : function(req, res){
    Piezas.forge()
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

  getPiezaById : function(req, res){
    Pieza.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(pieza){
      if(!pieza){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data : pieza.toJSON()
        })
      }
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : false,
        data : { message : err.message }
      })
    })
  },

  savePieza : function(req, res){
    Pieza.forge({
      nombre              : req.body.nombre,
      marca               : req.body.marca,
      modelo              : req.body.modelo,
      no_serie            : req.body.no_serie,
      costo               : req.body.costo,
      id_activo           : req.body.id_activo,
      id_program_mantto   : req.body.id_program_mantto
    })
    .save()
    .then(function(pieza){
      res.json({
        error : false,
        data : pieza.toJSON(),
        message: 'Saved successfully'
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

  updatePieza : function(req, res){
    Pieza.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(pieza){
      pieza.save({
        nombre              : req.body.nombre               || pieza.get('nombre'),
        marca               : req.body.marca                || pieza.get('marca'),
        modelo              : req.body.modelo               || pieza.get('modelo'),
        no_serie            : req.body.no_serie             || pieza.get('no_serie'),
        costo               : req.body.costo                || pieza.get('costo'),
        id_activo           : req.body.id_activo            || pieza.get('id_activo'),
        id_program_mantto   : req.body.id_program_mantto    || pieza.get('id_program_mantto')
      })
      .then(function(pieza){
        res.json({
          error : false,
          data : pieza.toJSON(),
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

  deletePieza : function(req, res){
    Pieza.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(pieza){
      pieza.destroy()
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