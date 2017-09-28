/*http://www.iconarchive.com/show/superhero-avatar-icons-by-hopstarter.html*/

(function () {
    "use strict";

    var app = angular
        .module("avatarsResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var avatars = [{
            "descripcion":"Agent Coulson",
            "imagenPequena":"imagenes/agentcoulson32x32.png",
            "imagenGrande":"imagenes/agentcoulson128x128.png"
        },{
            "descripcion":"BioMan",
            "imagenPequena":"imagenes/Bioman32x32.png",
            "imagenGrande":"imagenes/Bioman128x128.png"
        },{
            "descripcion":"Blue",
            "imagenPequena":"imagenes/Blue32x32.png",
            "imagenGrande":"imagenes/Blue128x128.png"
        },{
            "descripcion":"Captain",
            "imagenPequena":"imagenes/capitan32x32.png",
            "imagenGrande":"imagenes/capitan128x128.png"
        },{
            "descripcion":"Devil",
            "imagenPequena":"imagenes/Devil32x32.png",
            "imagenGrande":"imagenes/Devil128x128.png"
        },{
            "descripcion":"Female Face",
            "imagenPequena":"imagenes/FemaleFace32x32.png",
            "imagenGrande":"imagenes/FemaleFace128x128.png"
        },{
            "descripcion":"Frankenstein",
            "imagenPequena":"imagenes/Frankenstein32x32.png",
            "imagenGrande":"imagenes/Frankenstein128x128.png"
        },{
            "descripcion":"GiantMan",
            "imagenPequena":"imagenes/giantman32x32.png",
            "imagenGrande":"imagenes/giantman128x128.png"
        },{
            "descripcion":"Green",
            "imagenPequena":"imagenes/Green32x32.png",
            "imagenGrande":"imagenes/Green128x128.png"
        },{
            "descripcion":"HawEye",
            "imagenPequena":"imagenes/haweye32x32.png",
            "imagenGrande":"imagenes/haweye128x128.png"
        },{
            "descripcion":"Hulk",
            "imagenPequena":"imagenes/hulk32x32.png",
            "imagenGrande":"imagenes/hulk128x128.png"
        },{
            "descripcion":"IronMan",
            "imagenPequena":"imagenes/ironman32x32.png",
            "imagenGrande":"imagenes/ironman128x128.png"
        },{
            "descripcion":"Jason",
            "imagenPequena":"imagenes/Jason32x32.png",
            "imagenGrande":"imagenes/Jason128x128.png"
        },{
            "descripcion":"Loki",
            "imagenPequena":"imagenes/loki32x32.png",
            "imagenGrande":"imagenes/loki128x128.png"
        },{
            "descripcion":"Luchador",
            "imagenPequena":"imagenes/Luchador32x32.png",
            "imagenGrande":"imagenes/Luchador128x128.png"
        },{
            "descripcion":"Male Face 2",
            "imagenPequena":"imagenes/MaleFace_2_32x32.png",
            "imagenGrande":"imagenes/MaleFace_2_128x128.png"
        },{
            "descripcion":"Male Face",
            "imagenPequena":"imagenes/MaleFace32x32.png",
            "imagenGrande":"imagenes/MaleFace128x128.png"
        },{
            "descripcion":"Nick Fury",
            "imagenPequena":"imagenes/nickfury32x32.png",
            "imagenGrande":"imagenes/nickfury128x128.png"
        },{
            "descripcion":"Pink",
            "imagenPequena":"imagenes/Pink32x32.png",
            "imagenGrande":"imagenes/Pink128x128.png"
        },{
            "descripcion":"Red",
            "imagenPequena":"imagenes/Red32x32.png",
            "imagenGrande":"imagenes/Red128x128.png"
        },{
            "descripcion":"Smile",
            "imagenPequena":"imagenes/Smile32x32.png",
            "imagenGrande":"imagenes/Smile128x128.png"
        },{
            "descripcion":"Thor",
            "imagenPequena":"imagenes/thor32x32.png",
            "imagenGrande":"imagenes/thor128x128.png"
        },{
            "descripcion":"Viuda Negra",
            "imagenPequena":"imagenes/viudanegra32x32.png",
            "imagenGrande":"imagenes/viudanegra128x128.png"
        },{
            "descripcion":"WarMachine",
            "imagenPequena":"imagenes/warmachine32x32.png",
            "imagenGrande":"imagenes/warmachine128x128.png"
        },{
            "descripcion":"Yellow",
            "imagenPequena":"imagenes/Yellow32x32.png",
            "imagenGrande":"imagenes/Yellow128x128.png"
        }];

        var avatarsUrl = "/api/avatars";

        $httpBackend.whenGET(avatarsUrl).respond(avatars);

        $httpBackend.whenGET(/paginas/).passThrough();

    })
}());

