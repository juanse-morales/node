angular.module("HPMS",[])
.controller("showHVAE",["$scope","$http",function(s,h){
  const URL='http://localhost:8080';
  s.phs = [];
  s.newPh = {};
  s.epas = [];
  s.newEpa = {};
  s.epms = [];
  s.newEpm = {};
  s.aes = [];
  s.newAe = {};
  s.isSelected = false;

  h.get(URL+'/crud/ph').then(function(data){
    s.phs = data.data;
  },function(err){
    console.log(err);
  });

  s.addPh = function(){
    h.post(URL+"/crud/ph",{
      nombre    : s.newPh.nombre,
      telefono  : s.newPh.telefono,
      ubicacion : s.newPh.ubicacion,
      direccion : s.newPh.direccion
    }).then(function(data){
      s.phs.push(data.data);
      s.newPh = {};
    },function(err){
      console.log(err);
    });
  }

  h.get(URL+'/crud/empprovact').then(function(data){
    s.epas = data.data;
  },function(err){
    console.log(err);
  });

  s.addEpa = function(){
    h.post(URL+"/crud/empprovact",{
      nombre      : s.newEpa.nombre,
      correo      : s.newEpa.correo,
      telefono    : s.newEpa.telefono,
      ubicacion   : s.newEpa.ubicacion,
      direccion   : s.newEpa.direccion
    }).then(function(data){
      s.epas.push(data.data);
      s.newEpa = {};
    },function(err){
      console.log(err);
    });
  }

  h.get(URL+'/crud/empprovmantto').then(function(data){
    s.epms = data.data;
  },function(err){
    console.log(err);
  });

  s.addEpm = function(){
    h.post(URL+"/crud/empprovmantto",{
      nombre    : s.newEpm.nombre,
      correo    : s.newEpm.correo,
      telefono  : s.newEpm.telefono,
      ubicacion : s.newEpm.ubicacion,
      direccion : s.newEpm.direccion
    }).then(function(data){
      s.epms.push(data.data);
      s.newEpm = {};
    },function(err){
      console.log(err);
    });
  }

  s.addAe = function(){
    h.post(URL+"/crud/ae",{
      nombre                : s.newAe.nombre,
      tipo                  : s.newAe.tipo,
      marca                 : s.newAe.marca,
      modelo                : s.newAe.modelo,
      no_serie              : s.newAe.serie,
      ubicacion             : s.newAe.ubicacion,
      costo                 : s.newAe.costo,
      id_ph                 : s.newAe.ph,
      id_emp_prov_activo    : s.newAe.provact,
      id_emp_prov_mantto    : s.newAe.provmantto
    }).then(function(data,status,headers,config){
      s.newAe = {};
    },function(err,status,headers,config){
      console.log(err);
    });
  }
}]);