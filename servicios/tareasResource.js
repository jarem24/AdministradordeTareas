(function () {
    "use strict";
    
    angular
    .module("common")
    .factory("tareasResource",
             ["$resource",
              tareasResource]);
    
    function tareasResource($resource) {
        return $resource("http://localhost:10295/api/tareas/:tareaId");
    }
    
}());