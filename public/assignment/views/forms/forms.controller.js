"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, $scope, $location, FormService) {
        var user = $rootScope.currentUser;

        getForms(user);
        function getForms(user) {
            var callback = function (userForms) {
                $scope.userForms = userForms;
            };

            FormService.findAllFormsForUser(userId, callback);
        }


        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        var indice = -1;
        var userId;


        function addForm(formEle) {
            if (!formEle || !formEle.title) {
                return;
            }
            FormService.createFormForUser(userId, formEle, function (forms) {
                FormService.findAllFormsForUser(userId, function (forms) {
                    $scope.forms = forms;
                    $scope.form = {};
                    indice = -1;

                })

            })
        }

        function updateForm(formEle) {
            if (!formEle || !formEle.title) {
                return;
            }
            FormService.updateFormById(formEle._id, formEle, function (form) {
                if (indice >= 0) {
                    $scope.forms[indice] = form;
                    $scope.form = {};
                }
            })
        }


        function deleteForm(index) {
            FormService.deleteFormById($scope.forms[index]._id, function (forms) {
                FormService.findAllFormsForUser(userId, function (form) {

                    $scope.forms = form;
                    $scope.form = {};
                    indice = -1;
                })
            })
        }

        function  selectForm(index) {
            indice = index;
            var formSelect ={
                "_id": $scope.forms[index]._id,
                "title": $scope.forms[index].title,
                "userId":$scope.forms[index].userId
            };
            $scope.form = formSelect;
        }

    }
})();
