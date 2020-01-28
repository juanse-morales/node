angular.module("HPMS",[])
.controller("main",["$scope","$http",function(s,h){
  s.user = {};
  console.log(s.idUser);

  /*h.get(URL+'/crud/user/:'+s.idUser).then(function(data){
    //s.user = data.data;
    console.log(s.idUser);
  },function(err){
    console.log(err);
  });*/
}])