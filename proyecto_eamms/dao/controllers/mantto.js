var Mantto = require('../models/mantto');
var Manttos = require('../collections/mantto');

module.exports = {

  getManttos : function(req, res){
    Manttos.forge()
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

  getManttoById : function(req, res){
    Mantto.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(mantto){
      if(!mantto){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data : mantto.toJSON()
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

  saveMantto : function(req, res){
    Mantto.forge({
      tipo        : req.body.tipo,
      fecha       : req.body.fecha,
      realized    : req.body.realized,
      costo       : req.body.costo,
      id_program  : req.body.id_program
    })
    .save()
    .then(function(mantto){
      res.json({
        error : false,
        data : mantto.toJSON(),
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

  updateMantto : function(req, res){
    Mantto.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(mantto){
      mantto.save({
        tipo        : req.body.tipo         || mantto.get('tipo'),
        fecha       : req.body.fecha        || mantto.get('fecha'),
        realized    : req.body.realized     || mantto.get('realized'),
        costo       : req.body.costo        || mantto.get('costo'),
        id_program  : req.body.id_program   || mantto.get('id_program')
      })
      .then(function(mantto){
        res.json({
          error : false,
          data : mantto.toJSON(),
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

  deleteMantto : function(req, res){
    Mantto.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(mantto){
      mantto.destroy()
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