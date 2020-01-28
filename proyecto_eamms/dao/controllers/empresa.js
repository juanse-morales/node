var Emp = require('../models/empresa');
var Emps = require('../collections/empresa');

module.exports = {

  getEmps : function(req, res){
    Emps.forge()
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

  getEmpById : function(req, res){
    Emp.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(emp){
      if(!emp){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data : emp.toJSON()
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

  saveEmp : function(req, res){
    Emp.forge({
      nombre    : req.body.nombre,
      correo    : req.body.correo,
      telefono  : req.body.telefono,
      direccion : req.body.direccion,
      ubicacion : req.body.ubicacion
    })
    .save()
    .then(function(emp){
      res.json({
        error : false,
        data : { id : emp.get('id') }
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

  updateEmp : function(req, res){
    Emp.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(emp){
      emp.save({
        nombre : req.body.nombre || emp.get('nombre'),
        correo : req.body.correo || emp.get('correo'),
        telefono : req.body.telefono || emp.get('telefono'),
        direccion : req.body.direccion || emp.get('direccion'),
        ubicacion : req.body.ubicacion || emp.get('ubicacion'),
      })
      .then(function(){
        res.json({
          error : false,
          data : {message : "Empresa update"}
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

  deleteEmp : function(req, res){
    Emp.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(emp){
      emp.destroy()
      .then(function(){
        res.json({
          error : false,
          data : { message : 'Empresa deleted'}
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