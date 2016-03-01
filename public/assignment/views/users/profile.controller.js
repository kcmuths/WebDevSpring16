"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope, $scope, $location, UserService){
        $scope.$location = $location;
        $scope.update = update;
        $scope.user = $rootScope.currentUser;

        function update(user) {

            var user = UserService.updateUser($scope.user._id, $scope.user);

        }

    }
})();

