(function () {
    "use strict";

    angular
        .module("common")
        .factory("avatarsResource",
        ["$resource",
            avatarsResource]);

    function avatarsResource($resource) {
        return $resource("http://localhost:10295/api/avatars")
    }

}());
