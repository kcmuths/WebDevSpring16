"use strict";
(function(){
    angular
        .module("FormBuiderApp")
        .controller("SidebarController", SidebarController);
    function SidebarController($scope, $location){
        $scope.$location = $location;
    }
})();
