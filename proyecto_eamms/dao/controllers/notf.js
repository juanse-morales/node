var Notf = require('../models/notf');
var Notfs = require('../collections/notf');

module.exports = {

  getNotfs : function(req, res){
    Notfs.forge()
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

  getNotfById : function(req, res){
    Notf.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(notf){
      if(!notf){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data : notf.toJSON()
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

  saveNotf : function(req, res){
    Notf.forge({
      asunto      : req.body.asunto,
      fecha       : req.body.fecha,
      is_read     : req.body.is_read,
      tipo        : req.body.tipo,
      descripcion : req.body.descripcion,
      id_mantto   : req.body.id_mantto,
      id_user     : req.body.id_user
    })
    .save()
    .then(function(notf){
      res.json({
        error : false,
        data : notf.toJSON(),
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

  updateNotf : function(req, res){
    Notf.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(notf){
      notf.save({
        asunto        : req.body.asunto       || notf.get('asunto'),
        fecha         : req.body.fecha        || notf.get('fecha'),
        is_read       : req.body.is_read      || notf.get('is_read'),
        tipo          : req.body.tipo         || notf.get('tipo'),
        descripcion   : req.body.descripcion  || notf.get('descripcion'),
        id_mantto     : req.body.id_mantto    || notf.get('id_mantto'),
        id_user       : req.body.id_user      || notf.get('id_user')
      })
      .then(function(notf){
        res.json({
          error : false,
          data : notf.toJSON(),
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

  deleteNotf : function(req, res){
    Notf.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(notf){
      notf.destroy()
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