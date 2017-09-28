(function () {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("UsuariosCtrl",
                ["usuariosResource",
                 "$rootScope",
                 UsuariosCtrl]);
    
    function UsuariosCtrl(usuariosResource, $rootScope){
        var vm = this;
        
        //Obtener usuarios
        var obtenerUsuarios = function() {
            usuariosResource.query(function(data) {
                vm.usuarios = data;
            });
        }
        
        obtenerUsuarios();
        
        //Buscar usuarios        
        vm.buscar = "";
        
        //Nuevo usuario
        vm.panelUsuarioVisible = false;
        
        vm.mostrarPanelUsuario = function(mostrar) {
            vm.panelUsuarioVisible = mostrar;
        }
        
        $rootScope.$on('cancelarEdicionUsuario', function(event, args) {
            vm.mostrarPanelUsuario(false);
        });
     
        $rootScope.$on('actualizarListadeUsuarios',function(event, args) {
            obtenerUsuarios();
            vm.mostrarPanelUsuario(false);
        });        
        
        //Eliminar usuarios
        vm.eliminarUsuario = function(usuario) {

            if (confirm("Esta seguro que desea eliminar este usuario?")) {
                usuario.$remove({'usuarioId': usuario.usuarioId}, function (respond) {

                    var usuarioEliminado = respond;

                    if (usuarioEliminado) {
                        toastr.success("Usuario eliminado!");
                        obtenerUsuarios();
                    } else {
                        toastr.error("El usuario no se pudo eliminar");
                    }
                });
            }
        }        
    }
    
}());