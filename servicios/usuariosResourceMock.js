(function () {    
    "use strict";
    
    var app = angular
    .module("usuariosResourceMock",
            ["ngMockE2E"]);
    
    app.run(function ($httpBackend) {
        var usuarios = [{
            "usuarioId" : "1",
            "nombre" : "Steve Rogers",
            "puestoId" : "2",
            "imagenPequena" : "imagenes/capitan32x32.png",
            "imagenGrande" : "imagenes/capitan128x128.png"
        },{
            "usuarioId":"2",
            "nombre":"Thor Odinson",
            "puestoId" : "3",
            "imagenPequena":"imagenes/thor32x32.png",
            "imagenGrande":"imagenes/thor128x128.png"
        },{
            "usuarioId":"3",
            "nombre":"Tony Stark",
            "puestoId" : "1",
            "imagenPequena":"imagenes/ironman32x32.png",
            "imagenGrande":"imagenes/ironman128x128.png"
        },{
            "usuarioId":"4",
            "nombre":"Natalia Alianovna Romanov",
            "puestoId" : "2",
            "imagenPequena":"imagenes/viudanegra32x32.png",
            "imagenGrande":"imagenes/viudanegra128x128.png"
        },{
            "usuarioId":"5",
            "nombre":"Henry Jonathan Hank",
            "puestoId" : "4",
            "imagenPequena":"imagenes/giantman32x32.png",
            "imagenGrande":"imagenes/giantman128x128.png"
        },{
            "usuarioId":"6",
            "nombre":"Nick Fury",
            "puestoId" : "4",
            "imagenPequena":"imagenes/nickfury32x32.png",
            "imagenGrande":"imagenes/nickfury128x128.png"
        },{
            "usuarioId":"7",
            "nombre":"Bruce Banner",
            "puestoId" : "4",
            "imagenPequena":"imagenes/hulk32x32.png",
            "imagenGrande":"imagenes/hulk128x128.png"
        },{
            "usuarioId":"8",
            "nombre":"Loki Laufeyson",
            "puestoId" : "4",
            "imagenPequena":"imagenes/loki32x32.png",
            "imagenGrande":"imagenes/loki128x128.png"
        },{
            "usuarioId":"9",
            "nombre":"Phil Coulson",
            "puestoId" : "5",
            "imagenPequena":"imagenes/agentcoulson32x32.png",
            "imagenGrande":"imagenes/agentcoulson128x128.png"
        },{
            "usuarioId":"10",
            "nombre":"Clinton Francis Barton",
            "puestoId" : "6",
            "imagenPequena":"imagenes/haweye32x32.png",
            "imagenGrande":"imagenes/haweye128x128.png"
        },{
            "usuarioId":"11",
            "nombre":"James Rhodes",
            "puestoId" : "2",
            "imagenPequena":"imagenes/warmachine32x32.png",
            "imagenGrande":"imagenes/warmachine128x128.png"
        }];
        
        var usuariosUrl = "/api/usuarios";
        
        $httpBackend.whenGET(usuariosUrl).respond(usuarios);
        
        var editarRegex = new RegExp(usuariosUrl + "/[0-9][0-9]*", '');
        
        $httpBackend.whenGET(editarRegex).respond(function(method, url, data) {            
            var usuario = {"usuarioId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length -1];
            
            if(id > 0) {
                for(var i = 0; i < usuarios.length; i++) {
                    if(usuarios[i].usuarioId == id) {
                        usuario = usuarios[i];
                        break;
                    }
                }
            }                                

            return [200, usuario, {}];
        });
        
        
        $httpBackend.whenPOST(usuariosUrl).respond(function (method, url, data) {
            var usuario = angular.fromJson(data);

            if (!usuario.usuarioId) {
                // nuevo usuario Id
                if(usuarios.length - 1 >= 0) {
                    usuario.usuarioId = parseInt(usuarios[usuarios.length - 1].usuarioId) + 1;
                } else {
                    usuario.usuarioId = 1
                }
                usuarios.push(usuario);
            }
            else {
                // Actualizar usuario
                for (var i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].usuarioId == usuario.usuarioId) {
                        usuarios[i] = usuario;
                        break;
                    }
                }
            }
            return [200, usuario, {}];
        });
        
        var deletingRegex = new RegExp(usuariosUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenDELETE(deletingRegex).respond(function (method, url) {
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].usuarioId == id) {
                        usuarios.splice(i, 1);
                        break;
                    }
                }
            }

            return [200, true, {}];
        });        
        
        $httpBackend.whenGET(/paginas/).passThrough();
    })
    
}());