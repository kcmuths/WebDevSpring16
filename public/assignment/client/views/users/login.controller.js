"use strict";
(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        console.log("login page");
        var a = this;
        a.login = login;
        function init(){

        }
        init();

        function login(user){
            if (!user) {
                console.log("no user");
                return;
            }
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(function (response) {
                    if (response.data) {
                        UserService.setCurrentUser(response.data);
                        $location.url("/profile");
                        console.log("users logged");
                    }
                });
        }
    }

})();
