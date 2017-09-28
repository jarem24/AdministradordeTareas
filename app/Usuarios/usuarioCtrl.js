(function () {
    "use strict";

    angular
        .module("AdministradordeTareas")
        .controller("UsuarioCtrl", ["usuario",
                    "puestos",
                    "$rootScope",
                    "$state",
                    UsuarioCtrl]);

    function UsuarioCtrl(usuario, puestos, $rootScope, $state) {
        var vm = this;

        vm.usuario = usuario;
        vm.puestos = puestos;

        vm.cancelar = function () {
            $rootScope.$emit('cancelarEdicionUsuario');
            $state.go('usuarios');
        }

        $rootScope.$on('cambiarAvatar', function (event, avatar) {
            vm.usuario.imagenPequena = avatar.imagenPequena;
            vm.usuario.imagenGrande = avatar.imagenGrande;
        });


        vm.guardar = function (esValido) {
            if (esValido) {
                vm.usuario.$save(function (data) {
                    toastr.success('Usuario actualizado!');
                    //Evento para actualizar la lista de usuarios
                    $rootScope.$emit('actualizarListadeUsuarios');
                    $state.go('usuarios');                    
                })
            } else {
                alert('Corrija primero los errores antes de guardar');
            }
        }
        
        

    }

}());