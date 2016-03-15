"use strict";
var uUid = require('node-uuid');

module.exports = function(app){
    var forms = require('./form.mock.json');
    var api = {
        CreateForm: CreateForm,
        FindAllForms: FindAllForms,
        FindFormById: FindFormById,
        FindFormByTitle: FindFormByTitle,
        FindFormByUserId: FindFormByUserId,
        FindFieldById: FindFieldById,
        UpdateForm: UpdateForm,
        DeleteForm: DeleteForm,
        RemoveField: RemoveField,
        AddField: AddField,
        UpdateField: UpdateField
    };
    return api;

    function CreateForm(form) {
        forms.push(form);
        return forms;
    }
    function FindAllForms() {
        return forms;
    }

    function FindFormById(_id) {
        return forms.find(function(item, index, array) {
            return item._id === _id;
        });
    }

    function FindFormByTitle(title) {
        return forms.filter(function(item, index, array) {
            return item.title === title;
        });
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

    function UpdateForm(_id, update_form) {
        var form = FindById(_id);
        for(var i in update_form) {
            form[i] = update_form[i];
        }
        return forms;
    }

    function DeleteForm(_id) {
        var index = forms.findIndex(function (item, index, array) {
            return item._id === _id;
        });
        if (index != -1) {
            forms.splice(index, 1);
        }
        return forms;
    }

    function RemoveField(form_id, field_id) {
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
    }
};

