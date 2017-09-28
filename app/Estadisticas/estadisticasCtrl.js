(function () {
    "use strict";
    
    angular
        .module("AdministradordeTareas")
        .controller("EstadisticasCtrl",
        ["tareas",
        "estadisticasService",
        "$scope",
        EstadisticasCtrl]);
        
    function EstadisticasCtrl(tareas, estadisticasService, $scope) {
        //Chart por Estado
        $scope.dataTareasPorEstado = {
            series: ["Estado"],
            data: estadisticasService.calcularTareasPorEstado(tareas)
        };
        
        $scope.configTareasPorEstado = {
            title: "Tareas por Estado",
            tooltips: true,
            labels: false,
            mouseover: function () {},
            mouseout: function () {},
            click: function () {},
            legend: {
                display: true,
                position: "right"
            }
        };
        
        //Chart por Prioridad
        $scope.dataTareasPorPrioridad = {
            series: ["Prioridad"],
            data: estadisticasService.calcularTareasPorPrioridad(tareas)
        };

        $scope.configTareasPorPrioridad = {
            title: "Tareas por Prioridad",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: "right"
            }
        };        
    }
    

})();