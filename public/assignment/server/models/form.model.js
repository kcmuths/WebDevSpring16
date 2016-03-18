"use strict";
var forms = require('./form.mock.json');
var uUid = require('node-uuid');

module.exports = function(app){

    var api = {
        CreateForm: CreateForm,
        FindAllForms: FindAllForms,
        FindFormById: FindFormById,
        FindFormByTitle: FindFormByTitle,
        FindFormByUserId: FindFormByUserId,
        FindFieldById: FindFieldById,
        UpdateForm: UpdateForm,
        DeleteForm: DeleteForm,
      //  RemoveField: RemoveField,
        //AddField: AddField,
        //UpdateField: UpdateField
    };
    return api;

    function CreateForm(form) {
        var newForm= {
            _id: (new Date).getTime(),
            title: form.title,
            userId: form.userId
        };
        forms.push(newForm);
        return forms;
    }
    function FindAllForms() {
        return forms;
    }

    function FindFormById(id) {
        for(var i in forms){
            if(forms[i]._id == id)
            return forms[i];
        }
        return null;
    }

    function FindFormByTitle(title) {
        for (var i in forms) {
            if (forms[i].title == title)
                return forms[i];
        }
        return null;
    }

    function FindFormByUserId(user_id) {
        return forms.filter(function(item, index, array) {
            return item._id.toString() === user_id;
        });
    }

    function FindFieldById(form_id, field_id) {
        var form = FindById(form_id);
        return form.fields.find(function(item, index, array) {
            return item._id === field_id;
        });
    }

    function UpdateForm(id, form) {
        var upForm = forms.indexOf(id);
        forms[upForm].title = form.title;
        return forms;
    }

    function DeleteForm(id) {
        var i = FindFormById(id);
        var delForm = forms.indexOf(i);
        forms.splice(delForm, 1);
        return forms;
    }

    /*function RemoveField(form_id, field_id) {
        var form = FindById(form_id);
        var fieldIndex = form.fields.findIndex(function(item, index, array) {
            return item._id === field_id;
        });
        form.fields.splice(field_id, 1);
        return form.fields;
    }

    function AddField(form_id, add_field) {
        var form = FindById(form_id);
        add_field._id = uUid.v1();
        form.fields.push(add_field);
        return form.fields;
    }

    function UpdateField(form_id, field_id, update_field) {
        var field = FindFieldById(form_id, field_id);
        for(var i in update_field) {
            field[i] = update_field[i];
        }
    }  */
};

