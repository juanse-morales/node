var Ph = require('../models/ph');
var Phs = require('../collections/ph');

module.exports = {

  /** Controllers for Routes Web **/

  /**
   * Display a listing of the resource (PH).
   *
   * @return Response
   */
  list: (req,res)=>{
    Phs.forge().fetch().then((collection)=>res.render('ph/list',{phs: collection.toJSON()}))
    .catch((err)=>res.status(500).json({error : true, message : err.message}))
  },

  /**
   * Store a newly created resource in storage.
   *
   * @param  Request, Response
   * @return Response
   */
  store: function(req,res){
    Ph.forge({
      nombre      : req.body.nombre,
      telefono    : req.body.telefono,
      ubicacion   : req.body.ubicacion,
      direccion   : req.body.direccion
    }).save().then(function(ph){
      res.redirect('/listph');
    }).catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : {message : err.message}
      })
    })
  },

  // Controller for delete all Phs
  deletePhs : function(req, res){
    Phs.forge().fetch({ require : true })
    .then(function(ph){
      ph.map(function(n,i,a){
        n.destroy().then().catch(function(err){ res.status(500).json({ error : true, message : err.message })});
      });
      res.render('ph/list');
    }).catch(function(err){ res.status(500).json({ error : true, message : err.message }); res.render('ph/list')})
  },


  /** Controllers for Routes CRUD for Angular.js **/
  

  getPhs : function(req, res){
    Phs.forge()
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

  getPhById : function(req, res){
    Ph.forge({
      id : req.params.id
    })
    .fetch()
    .then(function(ph){
      if(!ph){
        res.status(404)
        .json({
          error : true,
          message: "File not found"
        })
      }else{
        res.send(ph);
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

  savePh : function(req, res){
    Ph.forge({
      nombre      : req.body.nombre,
      telefono    : req.body.telefono,
      ubicacion   : req.body.ubicacion,
      direccion   : req.body.direccion
    })
    .save()
    .then(function(ph){
      res.send(ph);
    })
    .catch(function(err){
      res.status(500)
      .json({
        error : true,
        data : {message : err.message}
      })
    })
  },

  updatePh : function(req, res){
    Ph.forge({
      id : req.params.id
    })
    .fetch({
      require : true
    })
    .then(function(ph){
      ph.save({
        nombre    : req.body.nombre     || ph.get('nombre'),
        telefono  : req.body.telefono   || ph.get('telefono'),
        ubicacion : req.body.ubicacion  || ph.get('ubicacion'),
        direccion : req.body.direccion  || ph.get('direccion')
      })
      .then(function(){
        res.send(ph);
      })
      .catch(function(err){
        res.json({
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
  },

  deletePh : function(req, res){
    Ph.forge({ id : req.params.id })
    .fetch({ require : true })
    .then(function(ph){
      ph.destroy()
      .then(function(){
        res.json({
          error : false,
          message : 'PH deleted'
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