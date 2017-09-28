(function () {
    "use strict";

    angular
        .module("AdministradordeTareas")
        .controller("AvatarsCtrl",
            ["avatars",
            "usuario",
            "$rootScope",
            AvatarsCtrl]);


    function AvatarsCtrl(avatars, usuario, $rootScope) {
        var vm = this;

        vm.avatars = avatars;
        vm.usuario = usuario;
        
        vm.cambiarAvatar = function(avatar){
            $rootScope.$emit('cambiarAvatar', avatar);
        }        

    }
}());
