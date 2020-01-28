const Ae = require('../models/ae'),
      Aes = require('../collections/ae'),
      Phs = require('../collections/ph');

module.exports = {
  
  // Controllers for Routes Web
  
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  list: function(req,res){
    Aes.forge().fetch().then((collection)=>res.render('ae/list',{aes: collection.toJSON()}))
    .catch((err)=>res.status(500).json({error : true, message : err.message}))
  },

  /**
   * Show the form for creating a new resource.
   *
   * @return Response.render
   */
  create: function(req,res){
    res.render('ae/create',{
      scope: {
        id          : '{{i.id}}',
        nombre      : '{{i.nombre}}',
        ubicacion   : '{{i.ubicacion}}',
        direccion   : '{{i.direccion}}'
      },
      user: req.user.toJSON()
    })
  },

  /**
   * Display the specified resource.
   *
   * @param  Request, Response
   * @return Response
   */
  show: function(req,res){
    Phs.forge().fetch().then((collection)=>{
      res.render('ae/show',{phs: collection.toJSON()});
    }).catch((err)=>res.status(500).send(err));
  },

  
  // Controllers for Routes CRUD for Angular.js

  getAes : function(req, res){
    Aes.forge()
    .fetch()
    .then(function(collection){
      res.send(collection);
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : { message : err.message }
      })
    })
  },

  getAeById : function(req, res){
    Ae.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(ae){
      if(!ae){
        res.status(404)
        .json({
          error : true,
          data : {},
          message: 'File Not Found'
        })
      }else{
        res.json({
          error : false,
          data :ae.toJSON()
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

  saveAe : function(req, res){
    Ae.forge({
      nombre                : req.body.nombre,
      tipo                  : req.body.tipo,
      marca                 : req.body.marca,
      modelo                : req.body.modelo,
      no_serie              : req.body.no_serie,
      ubicacion             : req.body.ubicacion,
      costo                 : req.body.costo,
      id_ph                 : req.body.id_ph,
      id_emp_prov_activo    : req.body.id_emp_prov_activo,
      id_emp_prov_mantto    : req.body.id_emp_prov_mantto
    })
    .save()
    .then(function(ae){
      res.json({
        error : false,
        data : ae.toJSON(),
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

  updateAe : function(req, res){
    Ae.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(ae){
      ae.save({
        nombre                : req.body.nombre               || ae.get('nombre'),
        tipo                  : req.body.tipo                 || ae.get('tipo'),
        marca                 : req.body.marca                || ae.get('marca'),
        modelo                : req.body.modelo               || ae.get('modelo'),
        no_serie              : req.body.no_serie             || ae.get('no_serie'),
        ubicacion             : req.body.ubicacion            || ae.get('ubicacion'),
        costo                 : req.body.costo                || ae.get('costo'),
        id_ph                 : req.body.id_ph                || ae.get('id_ph'),
        id_emp_prov_activo    : req.body.id_emp_prov_activo   || ae.get('id_emp_prov_activo'),
        id_emp_prov_mantto    : req.body.id_emp_prov_mantto   || ae.get('id_emp_prov_mantto')
      })
      .then(function(ae){
        res.json({
          error : false,
          data : ae.toJSON(),
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

  deleteAe : function(req, res){
    Ae.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(ae){
      ae.destroy()
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