"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, $location, UserService) {
        $scope.$location = $location;
        $scope.login = login;

        function login() {
            $scope.login = function () {
                UserService.findUserByCredentials(
                    $scope.user.username,
                    $scope.user.password,
                    function (user) {
                        $rootScope.currentUser = user;
                        $location.url('/profile');
                    });
            }
        }
    }
})();
