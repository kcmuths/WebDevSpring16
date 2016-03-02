"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, $scope, FormService){
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        var user = $rootScope.currentUser;

        getCurrentForms(user);
        function getCurrentForms(user){
            var callback = function (currentForms) {
                $scope.currentForms = currentForms;
            };
            FormService.findAllFormsForUser(user._id, callback);
        }

        function addForm(Title){
            var new_form = {title:Title};
            var callback = function (form) {
                FormService.findAllFormsForUser(
                    user._id,
                    function(userForms){
                        $scope.userForms = userForms;
                    });
            };
            FormService.createFormForUser(user._id, new_form, callback);

        }

        function updateForm(Title){
            var new_form = {
                _id: $scope.selectedForm.userId

            };
            var callback = function (form){
                FormService.findAllFormsForUser(
                    user._id,
                    function (userForms){
                        $scope.userForms = userForms;
                    });
            };
            FormService.updateFormById(new_form._id, new_form, callback);
        }

        function deleteForm(index){
            var callback = function(form) {
                FormService.findAllFormsForUser(user._id, function(userForms){
                    $scope.userForms = userForms;
                });
            };
            FormService.deleteFormById($scope.userForms[index]._id, callback);
        }

        function  selectForm(index) {
            $scope.selectedForm = $scope.userForms[index];
            $scope.Title = $scope.selectedForm.title;
        }

    }
})();
