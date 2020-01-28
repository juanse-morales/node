var Prog = require('../models/progmantto');
var Progs = require('../collections/progmantto');

module.exports = {

  getProgs : function(req, res){
    Progs.forge()
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

  getProgById : function(req, res){
    Prog.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(prog){
      if(!prog){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data : prog.toJSON()
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

  saveProg : function(req, res){
    Prog.forge({
      periodo               : req.body.periodo,
      ciclo                 : req.body.ciclo,
      tipo                  : req.body.tipo,
      descripcion           : req.body.descripcion,
      costo                 : req.body.costo,
      id_activo             : req.body.id_activo,
      id_emp_prov_mantto    : req.body.id_emp_prov_mantto
    })
    .save()
    .then(function(prog){
      res.json({
        error : false,
        data : prog.toJSON(),
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

  updateProg : function(req, res){
    Prog.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(prog){
      prog.save({
        periodo             : req.body.periodo              || prog.get('periodo'),
        ciclo               : req.body.ciclo                || prog.get('ciclo'),
        tipo                : req.body.tipo                 || prog.get('tipo'),
        descripcion         : req.body.descripcion          || prog.get('descripcion'),
        costo               : req.body.costo                || prog.get('costo'),
        id_activo           : req.body.id_activo            || prog.get('id_activo'),
        id_emp_prov_mantto  : req.body.id_emp_prov_mantto   || prog.get('id_emp_prov_mantto')
      })
      .then(function(prog){
        res.json({
          error : false,
          data : prog.toJSON(),
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

  deleteProg : function(req, res){
    Prog.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(prog){
      prog.destroy()
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