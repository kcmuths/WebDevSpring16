"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, $scope, FormService){
        var userId = $rootScope.currentUser._id;
        $scope.newForm = {};

        FormService.findAllFormsForUser(userId, function(forms){
            $scope.forms = forms;
        });

        $scope.addForm = function(){
            FormService.createFormForUser(userId, $scope.newForm, function(form){
                $scope.forms.push(form);
                $scope.newForm = {};
            });
        }
        $scope.updateForm = function(){
            if ($scope.selectedForm){
                FormService.updateFormById($scope.selectedForm._id, $scope.newForm, function(form){});
            }
        }
        $scope.deleteForm = function(index){
            FormService.deleteFormById($scope.forms[index]._id, function(forms){
                $scope.forms.splice(index, 1);
            });
        }
        $scope.selectForm = function(index) {
            $scope.selectedForm = $scope.forms[index];
            $scope.newForm.name = $scope.selectedForm.name;
        }
    }
})();
