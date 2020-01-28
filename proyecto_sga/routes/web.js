const express = require('express'),
tarea = require('../dao/controllers/tarea')
estudiante = require('../dao/controllers/estudiante'),
asistencia = require('../dao/controllers/asistencia');

module.exports = (function(){
  var router = express.Router();

  router.get('/',function(req,res){
    res.render('home')
  });

  router.get('/exit',function(req,res){
    res.render('home')
  });

  // Home
  router.get("/docente/asistencias",function(req,res){
    res.render('asistencia/create');
  });

  // Estudiante
  router.get("/docente/registrar",function(req,res){
    res.render('estudiantes/create');
  });
  router.get('/docente/estudiantes',estudiante.list);
  router.post('/estudiante/store',estudiante.store);

  // Tarea
  router.get('/docente/tareas',tarea.list);
  router.get('/acudiente/tareas',tarea.list2);
  router.post('/tarea/store',tarea.store);

  // Asistencia
  router.get('/acudiente/asistencia',function(req,res){
    res.render('asistencia/check');
  });
  router.post('/asistencia/check',asistencia.check);
  router.post('/asistencia/store',asistencia.store);

  return router;
})();