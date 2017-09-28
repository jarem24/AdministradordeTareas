(function(){
    "use strict";
    
    angular.module("AdministradordeTareas")
    .controller("MainCtrl", [MainCtrl]);
    
    function MainCtrl() {
        var vm = this;
        
        vm.saludo = "Hola que tal";
        vm.despedida = "adios";
    }
})();