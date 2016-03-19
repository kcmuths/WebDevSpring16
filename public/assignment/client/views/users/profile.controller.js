"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location, UserService){
        var a = this;
        a.updateUser = updateUser;
        a.error = null;
        a.message = null;
        console.log(UserService.getCurrentUser());
        a.currentUser = UserService.getCurrentUser();
        if(!$scope.currentUser){
            $location.url("/home");
        }

        function updateUser(user){
            console.log("controller");
            UserService.updateUser(a.currentUser._id,user)
                .then(function(response){
                    UserService.setCurrentUser(a.currentUser);
                    $location.url("/profile");
                });
        }



    }
})();

