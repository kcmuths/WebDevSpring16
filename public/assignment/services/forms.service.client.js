"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope){
        var model = {
            forms: [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
        ],
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById

        };
        return model;

        function createFormForUser(userId, form, callback){
            var new_form = {
                _id: (new Date).getTime(),
                userId: form.userId
            };
            model.forms.push(newform);
            callback(new_form);
        }

        function findAllFormsForUser(userId, callback){
            var searchForms = [];
            forms.forEach(function(ele){
                if (model.forms[ele].userId == userId){
                    searchForms.push(ele);
                }
            });
            callback(searchForms);
        }

        function deleteFormById(formId, callback){
            model.forms.forEach(function(ele,index){
                if(ele._id == formId){
                    model.forms.splice(index, 1);
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
