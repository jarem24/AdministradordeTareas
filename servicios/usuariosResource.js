(function () {
    "use strict";
    
    angular
    .module("common")
    .factory("usuariosResource",
             ["$resource",
              usuariosResource]);
    
    function usuariosResource($resource) {
        return $resource("http://localhost:10295/api/usuarios/:usuarioId");   
    }
    
}());