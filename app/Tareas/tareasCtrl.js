(function () {
    "use strict";
    
    angular
    .module("AdministradordeTareas")
    .controller("TareasCtrl",
                ["tareasResource",
                 "$state",
                 "$rootScope",
                 TareasCtrl]);

    function TareasCtrl(tareasResource, $state, $rootScope) {        
        var vm = this;
        
        var obtenerTareas = function() {
            tareasResource.query(function(data) {
               vm.tareas = data; 
            });
        }
        
        obtenerTareas();
        
        $rootScope.$on('actualizarListadeTareas',function(event, args) {
            obtenerTareas();
            vm.mostrarPanelTarea(false);
        });

        //Metodos para editar una tarea
        $rootScope.$on('cancelarEdiciondeTarea',function(event, args) {
            vm.mostrarPanelTarea(false);
        });

        //Busqueda de tareas
        vm.buscar = "";

        //Eliminar tareas
        vm.eliminarTarea = function(tarea) {

            if (confirm("Esta seguro que desea eliminar esta tarea?")) {
                tarea.$remove({'tareaId': tarea.tareaId}, function (respond) {

                    var tareaEliminada = respond;

                    if (tareaEliminada) {
                        toastr.success("Tarea eliminada!");
                        obtenerTareas();
                    } else {
                        toastr.error("La tarea no se pudo eliminar");
                    }
                });
            }
        };

        //Nueva tarea
        vm.panelTareaVisible = false;

        vm.mostrarPanelTarea = function(mostrar) {
            vm.panelTareaVisible = mostrar;
        };

        $rootScope.$on('mostrarPanelTarea',function(event, args) {
            vm.mostrarPanelTarea(true);
        });        
    }

    
})();