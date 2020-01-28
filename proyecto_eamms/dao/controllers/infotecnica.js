var Info = require('../models/infotecnica');
var Infos = require('../collections/infotecnica');

module.exports = {

  getInfos : function(req, res){
    Infos.forge()
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

  getInfoById : function(req, res){
   Info.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(info){
      if(!info){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data : info.toJSON()
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

  saveInfo : function(req, res){
   Info.forge({
      temperatura   : req.body.temperatura,
      potencia      : req.body.potencia,
      voltaje       : req.body.voltaje,
      amperaje      : req.body.amperaje,
      humedad       : req.body.humedad,
      id_activo     : req.body.id_activo
    })
    .save()
    .then(function(info){
      res.json({
        error : false,
        data : info.toJSON(),
        message: 'Save successfully'
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

  updateInfo : function(req, res){
   Info.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(info){
      info.save({
        temperatura : req.body.temperatura  || info.get('temperatura'),
        potencia    : req.body.potencia     || info.get('potencia'),
        voltaje     : req.body.voltaje      || info.get('voltaje'),
        amperaje    : req.body.amperaje     || info.get('amperaje'),
        humedad     : req.body.humedad      || info.get('humedad'),
        id_activo   : req.body.id_activo    || info.get('id_activo')
      })
      .then(function(info){
        res.json({
          error : false,
          data : info.toJSON(),
          message : 'Update successfully'
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

  deleteInfo : function(req, res){
   Info.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(info){
      info.destroy()
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