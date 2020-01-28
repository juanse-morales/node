const express = require('express');

const aeCtrl = require('../dao/controllers/ae'),
    empprovmanttoCtrl = require('../dao/controllers/empprovmantto'),
    empprovactCtrl = require('../dao/controllers/empprovact'),
    empCtrl = require('../dao/controllers/empresa'),
    infomanttoCtrl = require('../dao/controllers/infomantto'),
    infotecnicaCtrl = require('../dao/controllers/infotecnica'),
    manttoCtrl = require('../dao/controllers/mantto'),
    notfCtrl = require('../dao/controllers/notf'),
    phCtrl = require('../dao/controllers/ph'),
    piezaCtrl = require('../dao/controllers/pieza'),
    progmanttoCtrl = require('../dao/controllers/progmantto'),
    userCtrl = require('../dao/controllers/user');

module.exports = (function () {
  var router = express.Router();

  router.get('/aes', aeCtrl.getAes);
  router.post('/ae', aeCtrl.saveAe);
  router.get('/ae/:id', aeCtrl.getAeById);
  router.put('/ae/:id', aeCtrl.updateAe);
  router.delete('/ae/:id', aeCtrl.deleteAe);

  router.post('/empprovmantto', empprovmanttoCtrl.saveEmp);
  router.get('/empprovmantto', empprovmanttoCtrl.getEmps);
  router.get('/empprovmantto/:id', empprovmanttoCtrl.getEmpById);
  router.put('/empprovmantto/:id', empprovmanttoCtrl.updateEmp);
  router.delete('/empprovmantto/:id', empprovmanttoCtrl.deleteEmp);

  router.post('/empprovact', empprovactCtrl.saveEmp);
  router.get('/empprovact', empprovactCtrl.getEmps);
  router.get('/empprovact/:id', empprovactCtrl.getEmpById);
  router.put('/empprovact/:id', empprovactCtrl.updateEmp);
  router.delete('/empprovact/:id', empprovactCtrl.deleteEmp);

  router.post('/emp', empCtrl.saveEmp);
  router.get('/emp', empCtrl.getEmps);
  router.get('/emp/:id', empCtrl.getEmpById);
  router.put('/emp/:id', empCtrl.updateEmp);
  router.delete('/emp/:id', empCtrl.deleteEmp);

  router.post('/infomantto', infomanttoCtrl.saveInfo);
  router.get('/infomantto', infomanttoCtrl.getInfos);
  router.get('/infomantto/:id', infomanttoCtrl.getInfoById);
  router.put('/infomantto/:id', infomanttoCtrl.updateInfo);
  router.delete('/infomantto/:id', infomanttoCtrl.deleteInfo);

  router.post('/infotecnica', infotecnicaCtrl.saveInfo);
  router.get('/infotecnica', infotecnicaCtrl.getInfos);
  router.get('/infotecnica/:id', infotecnicaCtrl.getInfoById);
  router.put('/infotecnica/:id', infotecnicaCtrl.updateInfo);
  router.delete('/infotecnica/:id', infotecnicaCtrl.deleteInfo);

  router.post('/mantto', manttoCtrl.saveMantto);
  router.get('/mantto', manttoCtrl.getManttos);
  router.get('/mantto/:id', manttoCtrl.getManttoById);
  router.put('/mantto/:id', manttoCtrl.updateMantto);
  router.delete('/mantto/:id', manttoCtrl.deleteMantto);

  router.post('/notf', notfCtrl.saveNotf);
  router.get('/notf', notfCtrl.getNotfs);
  router.get('/notf/:id', notfCtrl.getNotfById);
  router.put('/notf/:id', notfCtrl.updateNotf);
  router.delete('/notf/:id', notfCtrl.deleteNotf);

  router.post('/ph', phCtrl.savePh);
  router.get('/ph', phCtrl.getPhs);
  router.get('/ph/:id', phCtrl.getPhById);
  router.put('/ph/:id', phCtrl.updatePh);
  router.delete('/ph/:id', phCtrl.deletePh);

  router.post('/pieza', piezaCtrl.savePieza);
  router.get('/pieza', piezaCtrl.getPiezas);
  router.get('/pieza/:id', piezaCtrl.getPiezaById);
  router.put('/pieza/:id', piezaCtrl.updatePieza);
  router.delete('/pieza/:id', piezaCtrl.deletePieza);

  router.post('/progmantto', progmanttoCtrl.saveProg);
  router.get('/progmantto', progmanttoCtrl.getProgs);
  router.get('/progmantto/:id', progmanttoCtrl.getProgById);
  router.put('/progmantto/:id', progmanttoCtrl.updateProg);
  router.delete('/progmantto/:id', progmanttoCtrl.deleteProg);

  router.post('/user', userCtrl.signup);
  router.get('/user', userCtrl.getUsers);
  router.get('/user/:id', userCtrl.getUserById);
  router.put('/user/:id', userCtrl.updateUser);
  router.delete('/user/:id', userCtrl.deleteUser);

  return router;

})();