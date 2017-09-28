(function () {
    "use strict";

    angular
        .module("AdministradordeTareas")
        .controller("TareaCtrl",
        ["tarea",
            "usuario",
            "usuarios",
            "$state",
            "$rootScope",
            TareaCtrl]);


    function TareaCtrl(tarea, usuario, usuarios, $state, $rootScope) {
        var vm = this;

        vm.tarea = tarea;
        vm.tarea.asignadoA = usuario;
        vm.usuarios = usuarios;

        vm.guardar = function (isValid) {
            if (isValid) {
                vm.tarea.$save(function (data) {
                    toastr.success("Tarea actualizada!");

                    //Evento para actualizar la lista de usuarios
                    $rootScope.$emit('actualizarListadeTareas');
                    $state.go('tareas');
                })
            } else {
                toastr.error("Corrija los errores primero antes de guardar");
            }
        };

        vm.cancelar = function () {
            $rootScope.$emit('cancelarEdiciondeTarea');
            $state.go('tareas');
        };


        //Es nueva tarea?
        if(tarea.tareaId == 0) {
            vm.estados = [ { "estado" : "PENDIENTE"} ];
            vm.tarea.estado = "PENDIENTE";
        } else {
            vm.estados = [ { "estado" : "PENDIENTE"}, { "estado" : "PROCESO"}, { "estado" : "HECHO"} ];
        }

        vm.prioridades = [ {"prioridad" : "BAJA" }, {"prioridad" : "MEDIA" }, {"prioridad" : "ALTA" } ];


        if(usuario){
            $rootScope.$emit('mostrarPanelTarea');
        }
    }
}());
