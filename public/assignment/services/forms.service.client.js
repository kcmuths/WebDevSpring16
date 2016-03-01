"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope){
        var forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
        ];
        var formservice = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById

        };
        return formservice;

        function createFormForUser(userId, form, callback){
            form._id = (new Date).getTime();
            form.userId = userId;
            forms.push(form);
            callback(form);
        }

        function findAllFormsForUser(userId, callback){
            var searchForms = [];
            forms.forEach(function(ele){
                if (forms[ele].userId == userId){
                    searchForms.push(ele);
                }
            });
            callback(searchForms);
        }

        function deleteFormById(formId, callback){
            forms.forEach(function(ele,index){
                if(ele._id == formId){
                    forms.splice(index, 1);
                    callback(forms);
                }
            })
        }

        function updateFormById(formId, newForm, callback){
            forms.forEach(function (ele, index){
                if(ele._id == formId){
                    for(var prop in newForm){
                        ele[prop] = newForm[prop];
                    }
                    callback(ele);
                }
            })
        }
    }
})();
