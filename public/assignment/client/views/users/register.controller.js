"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($rootScope, $scope, $location, UserService) {
        $scope.register = register;
        $scope.message = null;
        $scope.user = null;

        var a = this;
        a.register = register;
        function init(){

        }
        init();
        function register(user){
            if(!user){
                console.log("please enter user to register");
                return;
            }
            UserService
                .createUser(user)
                .then(function(response){
                    var re = response.data;
                    if(re != null){
                        UserService.setCurrentUser(user);
                        $location.url("/profile");
                    }
                });
        }

    }

})();
