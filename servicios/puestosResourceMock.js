(function () {
    "use strict";

    var app = angular
        .module("puestosResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var puestos = [{
            "puestoId":"1",
            "descripcion":"Programador Junior"
        },{
            "puestoId":"2",
            "descripcion":"Programador Senior"
        },{
            "puestoId":"3",
            "descripcion":"QA"
        },{
            "puestoId":"4",
            "descripcion":"Soporte"
        },{
            "puestoId":"5",
            "descripcion":"Analista"
        },{
            "puestoId":"6",
            "descripcion":"Arquitecto"
        }];

        var puestosUrl = "/api/puestos";

        $httpBackend.whenGET(puestosUrl).respond(puestos);

        $httpBackend.whenGET(/paginas/).passThrough();

    })
}());

