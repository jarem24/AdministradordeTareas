(function () {
    "use stict";
    
    var app = angular
    .module("tareasResourceMock",
           ["ngMockE2E"]);
    
    app.run(function ($httpBackend) {
        
        var tareas = [
            {
                "tareaId" : "1",
                "asignadoA" : {
                    "usuarioId" : "1",
                    "nombre" : "Steve Rogers",
                    "puestoId" : "2",
                    "imagenPequena" : "imagenes/capitan32x32.png",
                    "imagenGrande" : "imagenes/capitan128x128.png"
                },
                "descripcion" : "Crear view para listar tareas",
                "estado" : "PENDIENTE",
                "prioridad" : "ALTA"
            }, {"tareaId": "2",
                "asignadoA" : {
                    "usuarioId":"3",
                    "nombre":"Tony Stark",
                    "puestoId" : "1",
                    "imagenPequena":"imagenes/ironman32x32.png",
                    "imagenGrande":"imagenes/ironman128x128.png"
                },
                "descripcion" : "Crear view para crear nuevas tareas",
                "estado" : "PENDIENTE",
                "prioridad" : "BAJA" },
            {"tareaId": "3",
                "asignadoA" : {
                    "usuarioId":"8",
                    "nombre":"Loki Laufeyson",
                    "puestoId" : "4",
                    "imagenPequena":"imagenes/loki32x32.png",
                    "imagenGrande":"imagenes/loki128x128.png"
                },
                "descripcion" : "Crear view para crear nuevas tareas",
                "estado" : "PROCESO",
                "prioridad" : "BAJA" },
            {"tareaId": "4",
                "asignadoA" : {
                    "usuarioId":"8",
                    "nombre":"Loki Laufeyson",
                    "puestoId" : "4",
                    "imagenPequena":"imagenes/loki32x32.png",
                    "imagenGrande":"imagenes/loki128x128.png"
                },
                "descripcion" : "Crear view para crear nuevas tareas",
                "estado" : "HECHO",
                "prioridad" : "MEDIA" }];
        
        var tareasUrl = "/api/tareas";
        
        $httpBackend.whenGET(tareasUrl).respond(tareas);
        
        var editingRegex = new RegExp(tareasUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var tarea = {"tareaId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < tareas.length; i++) {
                    if (tareas[i].tareaId == id) {
                        tarea = tareas[i];
                        break;
                    }
                }
            }
            return [200, tarea, {}];
        });

        $httpBackend.whenPOST(tareasUrl).respond(function (method, url, data) {
            var tarea = angular.fromJson(data);

            if (!tarea.tareaId) {
                // nueva tarea Id
                if(tareas.length - 1 >= 0) {
                    tarea.tareaId = parseInt(tareas[tareas.length - 1].tareaId) + 1;
                } else {
                    tarea.tareaId = 1;
                }
                tareas.push(tarea);
            }
            else {
                // Actualizar tarea
                for (var i = 0; i < tareas.length; i++) {
                    if (tareas[i].tareaId == tarea.tareaId) {
                        tareas[i] = tarea;
                        break;
                    }
                }
            }
            return [200, tarea, {}];
        });

        var deletingRegex = new RegExp(tareasUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenDELETE(deletingRegex).respond(function (method, url) {
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < tareas.length; i++) {
                    if (tareas[i].tareaId == id) {
                        tareas.splice(i, 1);
                        break;
                    }
                }
            }

            return [200, true, {}];
        });
        
        $httpBackend.whenGET(/paginas/).passThrough();
        
    });
    
})();