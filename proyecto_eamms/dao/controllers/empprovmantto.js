var Emp = require('../models/empprovmantto');
var Emps = require('../collections/empprovmantto');

module.exports = {

  getEmps : function(req, res){
    Emps.forge()
    .fetch()
    .then(function(collection){
      res.send(collection);
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        message : err.message
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
        res.send(emp);
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
      ubicacion : req.body.ubicacion,
      direccion : req.body.direccion
    })
    .save()
    .then(function(emp){
      res.send(emp);
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
        nombre    : req.body.nombre     || emp.get('nombre'),
        correo    : req.body.correo     || emp.get('correo'),
        telefono  : req.body.telefono   || emp.get('telefono'),
        ubicacion : req.body.ubicacion  || emp.get('ubicacion'),
        direccion : req.body.direccion  || emp.get('direccion')
      })
      .then(function(){
        res.send(emp);
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
          message : 'Deleted successfully'
        })
      })
      .catch(function(err){
        res.status(500)
        .json({
          error : true,
          message : err.message
        })
      })
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