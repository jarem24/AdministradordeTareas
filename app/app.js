(function() {
    "use strict";
    
    var app = angular.module("AdministradordeTareas", 
                             ["ui.router",
                             "angularCharts",
                             "common"
                             /*"tareasResourceMock",
                             "usuariosResourceMock",
                             "puestosResourceMock",
                             "avatarsResourceMock"*/
							 ]);
    
    app.config(["$stateProvider", "$urlRouterProvider",
               function($stateProvider, $urlRouterProvider){
                   
                   $urlRouterProvider.otherwise("/");
                   
                   $stateProvider
                   .state("inicio", {
                       url: "/",
                       templateUrl: "paginas/bienvenidos.html"
                   })
                   .state("tareas", {
                       url: "/tareas",
                       templateUrl: "paginas/tareas.html",
                       controller: "TareasCtrl as vm"
                   }).state("tareas.tarea", {
                                url: "/tarea/:tareaId/:usuarioId",
                                templateUrl: "paginas/tarea.html",
                                controller: "TareaCtrl as vm",
                                resolve: {
                                    tareasResource: "tareasResource",
                                    usuariosResource: "usuariosResource",
                                    tarea: function (tareasResource, $stateParams) {
                                        var tareaId = $stateParams.tareaId;
                                        return tareasResource.get({ tareaId: tareaId }).$promise;
                                    },
                                    usuario: function (usuariosResource, $stateParams) {
                                        var usuarioId = $stateParams.usuarioId;
                                        return usuariosResource.get({ usuarioId: usuarioId }).$promise;
                                    },
                                    usuarios: function (usuariosResource) {
                                        return usuariosResource.query().$promise;
                                    }
                                }
                            })
                   .state("usuarios", {
                       url: "/usuarios",
                       templateUrl: "paginas/usuarios.html",
                       controller : "UsuariosCtrl as vm"
                   })
                        .state("usuarios.usuario",{
                            url: "/usuario/:usuarioId",
                            templateUrl : "paginas/usuario.html",
                            controller: "UsuarioCtrl as vm",
                            resolve : {
                                usuariosResource: "usuariosResource",
                                puestosResource: "puestosResource",
                                
                                usuario: function(usuariosResource, $stateParams) {
                                    var usuarioId = $stateParams.usuarioId;
                                    return usuariosResource.get({ usuarioId: usuarioId}).$promise;
                                },
                                
                                puestos: function(puestosResource) {
                                    return puestosResource.query().$promise;   
                                }
                            }
                        })
                            .state("usuarios.usuario.avatars", {
                                url: "/avatars",
                                templateUrl: "paginas/avatars.html",
                                controller: "AvatarsCtrl as vm",
                                resolve: {
                                    avatarsResource : "avatarsResource",
                                    usuariosResource: "usuariosResource",
                                    avatars: function (avatarsResource) {
                                        return avatarsResource.query().$promise;
                                    },
                                    usuario: function (usuariosResource, $stateParams) {
                                        var usuarioId = $stateParams.usuarioId;
                                        return usuariosResource.get({ usuarioId: usuarioId }).$promise;
                                    }
                                }
                            })
                    .state("estadisticas", {
                        url: "/estadisticas",
                        templateUrl: "paginas/estadisticas.html",
                        controller: "EstadisticasCtrl",
                        resolve: {
                            tareasResource: "tareasResource",
                            tareas: function (tareasResource) {
                                return tareasResource.query().$promise;
                            }
                        }
                    });
                   
               }]);


    
})();