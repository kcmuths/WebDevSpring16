"use strict"
(function(){
    angular.module("FormBuilderApp")
    angular.config(function($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"./views/home/home.view.html"
            })
            .when("/login",{
                templateUrl:"./views/users/login.view.html"
            })
            .when("/register",{
                templateUrl:"./views/users/register.view.html"
            })
            .when("/profile",{
                templateUrl:"./views/profile/profile.view.html"
            })
            .when("/forms",{
                templateUrl:"./views/home/home.view.html"
            })
            .otherwise({
                redirectTo:"/home"
            });


    });
})();