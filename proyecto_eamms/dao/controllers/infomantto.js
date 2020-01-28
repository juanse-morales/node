var Info = require('../models/infomantto');
var Infos = require('../collections/infomantto');

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
      tipo_mantto             : req.body.tipo_mantto,
      fecha_realized_info     : req.body.fecha_realized_info,
      fecha_realized_mantto   : req.body.fecha_realized_mantto,
      nombre_tecnico          : req.body.nombre_tecnico,
      costo_mantto            : req.body.costo_mantto,
      descripcion             : req.body.descripcion,
      piezas_revisadas        : req.body.piezas_revisadas,
      piezas_mantenidas       : req.body.piezas_mantenidas,
      piezas_reparadas        : req.body.piezas_reparadas,
      id_mantto               : req.body.id_mantto,
      id_emp_prov_mantto      : req.body.id_emp_prov_mantto
    })
    .save()
    .then(function(info){
      res.json({
        error : false,
        data : info.toJSON(),
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

  updateInfo : function(req, res){
   Info.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(info){
      info.save({
        tipo_mantto             : req.body.tipo_mantto            || info.get('tipo_mantto'),
        fecha_realized_info     : req.body.fecha_realized_info    || info.get('fecha_realized_info'),
        fecha_realized_mantto   : req.body.fecha_realized_mantto  || info.get('fecha_realized_mantto'),
        nombre_tecnico          : req.body.nombre_tecnico         || info.get('nombre_tecnico'),
        costo_mantto            : req.body.costo_mantto           || info.get('costo_mantto'),
        descripcion             : req.body.descripcion            || info.get('descripcion'),
        piezas_revisadas        : req.body.piezas_revisadas       || info.get('piezas_revisadas'),
        piezas_mantenidas       : req.body.piezas_mantenidas      || info.get('piezas_mantenidas'),
        piezas_reparadas        : req.body.piezas_reparadas       || info.get('piezas_reparadas'),
        id_mantto               : req.body.id_mantto              || info.get('id_mantto'),
        id_emp_prov_mantto      : req.body.id_emp_prov_mantto     || info.get('id_emp_prov_mantto')
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