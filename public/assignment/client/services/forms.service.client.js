"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var forms = [];
        forms: [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo", "userId": 123},
            {"_id": "020", "title": "CDs", "userId": 234}
        ];
        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById

        };
        return service;

        function createFormForUser(userId, form, callback) {
            var _id = (new Date).getTime();
            var formCreation = {
                "_id": _id,
                "userId": userId,
                "title": form["title"]
            };
            forms.push(formCreation);
            callback(formCreation);
        }

        function findAllFormsForUser(userId, callback) {
            var searchForms = [];
            for (var u =0; u <forms.length; u ++){
                if (forms[u].userId == userId) {
                    searchForms.push(forms[u]);
                }
            }
            callback(searchForms)

        }


        function deleteFormById(formId, callback) {
            var u = "";
            for (u in forms) {
                if (forms[u]._id == formId) {
                    forms.splice(u, 1);
                    callback(forms);
                    return;
                }
            }
        }

        function updateFormById(formId, newForm, callback) {
            var u = "";
            for (u in forms) {
                if (forms[u]._id == formId) {
                    var formUpdate = {
                        "_id": newForm["_id"],
                        "userId": newForm["userId"],
                        "title": newForm["title"]
                    };
                    forms[u] = formUpdate;
                    callback(forms[u]);
                    return;
                }
            }
        }
    }
})();
