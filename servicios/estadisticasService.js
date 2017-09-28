(function () {
    "use strict";

    angular
        .module("common")
        .factory("estadisticasService",
        estadisticasService);

    function estadisticasService(){
        function calcularTareasPorEstado(tareas) {
            var pendiente = 0;
            var enproceso = 0;
            var hecho = 0;

            var dataTareasPorEstado = [];

            for (var i = 0; i < tareas.length; i++) {
                if(tareas[i].estado == "PENDIENTE"){
                    pendiente++;
                }
                if(tareas[i].estado == "PROCESO"){
                    enproceso++;
                }
                if(tareas[i].estado == "HECHO"){
                    hecho++;
                }
            }

            dataTareasPorEstado.push({
                x: 'Pendiente',
                y: [pendiente]
            });

            dataTareasPorEstado.push({
                x: 'En Proceso',
                y: [enproceso]
            });

            dataTareasPorEstado.push({
                x: 'Hecho',
                y: [hecho]
            });

            return dataTareasPorEstado;
        }

        function calcularTareasPorPrioridad(tareas) {
            var alta = 0;
            var media = 0;
            var baja = 0;

            var dataTareasPorPrioridad = [];

            for (var i = 0; i < tareas.length; i++) {
                if(tareas[i].prioridad == "ALTA"){
                    alta++;
                }
                if(tareas[i].prioridad == "MEDIA"){
                    media++;
                }
                if(tareas[i].prioridad == "BAJA"){
                    baja++;
                }
            }

            dataTareasPorPrioridad.push({
                x: 'Baja',
                y: [baja]
            });

            dataTareasPorPrioridad.push({
                x: 'Media',
                y: [media]
            });

            dataTareasPorPrioridad.push({
                x: 'Alta',
                y: [alta]
            });

            return dataTareasPorPrioridad;
        }

        return {
            calcularTareasPorEstado: calcularTareasPorEstado,
            calcularTareasPorPrioridad: calcularTareasPorPrioridad
        }
    }
}());
