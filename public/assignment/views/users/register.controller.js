"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($rootScope, $scope, $location, UserService) {
        $scope.$location = $location;
        $scope.register = register;
        $scope.message = null;

        function register(user) {
            $scope.message = null;
            if (user == null) {
                $scope.message = " Please fill all fields";
                return;
            }
            if (!user.username) {
                $scope.message = "Please provide an username";
                return;
            }
            if (!user.password || !user.password2) {
                $scope.message = "Please provide a password";
                return;
            }
            if (user.password != user.password2) {
                $scope.message = "Passwords should match";
                return;
            }
            var user = UserService.findUserByCredentials(user.username, user.password);
            if (user != null) {
                $scope.message = "User Already exists";
                return;
            }
            var newUser = UserService.createUser($scope.user);
            UserService.setCurrentUser(newUser);
            $location.url("/profile");
        }
    }

})();
