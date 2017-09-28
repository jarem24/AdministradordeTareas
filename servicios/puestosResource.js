(function () {
    "use strict";

    angular
        .module("common")
        .factory("puestosResource",
        ["$resource",
            puestosResource]);

    function puestosResource($resource) {
        return $resource("http://localhost:10295/api/puestos/:puestoId")
    }

}());
