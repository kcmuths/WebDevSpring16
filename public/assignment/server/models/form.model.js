"use strict";
var forms = require("./form.mock.json");
var uuid = require("node-uuid");
var uuid4 = uuid.v4();

module.exports = function(app){
    var api = {
        Create : Create,
        FindAll : FindAll,
        FindById : FindById,
        Update : Update,
        Delete : Delete,
        FindFormByTitle : FindFormByTitle,
        FindFormsByUserId : FindFormsByUserId,
        AddFormField : AddFormField,
        FindField : FindField,
        UpdateFormField : UpdateFormField,
        DeleteFormField : DeleteFormField
    }

    return api;

    function Create(form,userId){
        console.log(userId + " 7");
        console.log(form);
        form.userId = userId;
        form._id = (new Date).getTime();
        form.fields = [];
        forms.push(form);
        return forms;
    }

    function FindAll(){
        return forms;
    }

    function FindById(id){
        for(var i = 0; i<forms.length; i++){
            if(id === forms[i]._id){
                return forms[i];
            }
        }
        return null;
    }

    function Update(id, form){
        for(var i = 0; i<forms.length; i++){
            if(id === forms[i]._id){
                forms[i].title = form.title;
                forms[i].userId = form.userId
                return forms[i];
            }
        }
        return null;
    }

    function Delete(id){
        console.log(id);
        for(var i = 0; i<forms.length; i++) {
            console.log(forms[i]._id);
            if (id == forms[i]._id) {
                forms.splice(i, 1);
            }
        }
    }

    function FindFormByTitle(title){
        for(var i = 0; i<forms.length; i++){
            if(title === forms[i].title){
                return forms[i];
            }
        }
        return null;
    }

    function FindFormsByUserId(userId){
        var userForms = [];
        for(var i = 0; i<forms.length; i++){
            console.log(forms[i].userId);
            if(forms[i].userId == userId){
                userForms.push(forms[i]);
            }
        }
        return userForms;
    }

    function AddFormField(formId, field){
        field._id = (new Date).getTime();
        for(var i = 0; i<forms.length; i++) {
            if (formId === forms[i]._id) {
                if(forms[i].fields == null){
                    forms[i].fields = [];
                    forms[i].fields.push(field);
                }
                else{
                    forms[i].fields.push(field);
                }
                return forms[i].fields;
            }
        }
    }

    function FindField(formId,fieldId){
        for(var i = 0; i<forms.length; i++) {
            if (forms[i]._id === formId) {
                for (var j = 0; j < forms[i].fields.length; j++) {
                    if (forms[i].fields[j]._id === fieldId) {
                        return forms[i].fields[j];
                    }
                }
            }
        }
        return null;
    }

    function UpdateFormField(formId, fieldId, field){
        for(var i = 0; i<forms.length; i++){
            if(forms[i]._id === formId){
                for(var j = 0; j<forms[i].fields.length; j++){
                    if(forms[i].fields[j]._id === fieldId){
                        forms[i].fields[j] = field;
                    }
                }
            }
        }
    }

    function DeleteFormField(formId, fieldId){
        for(var i = 0; i<forms.length; i++){
            if(forms[i]._id == formId){
                for(var j = 0; j<forms[i].fields.length; j++){
                    if(forms[i].fields[j]._id === fieldId){
                        forms[i].fields.splice(j,1);
                    }
                }
                return forms[i].fields;
            }
        }
    }
};