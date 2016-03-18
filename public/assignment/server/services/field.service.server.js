"use strict";
module.exports = function(app, model){
    app.get('api/assignment/form/:formId/field', function(req,res){
        res.json(model.FindById(req.params.formId).fields);
    });
    app.get('/api/assignment/form/:formId/field/:fieldId', function(req,res){
        res.json(model.FindField(req.params.formId, req.params.fieldId));
    });

    app.delete('api/assignment/form/:formId/field/:fieldId', function(req, res){
        res.json(model.DeleteFormField(req.params.formId, req.params.fieldId));

    });
    app.post('api/assignment/form/:formId/field', function(req, res){
        res.json(model.AddFormField(req.params.formId, req.body));
    });
    app.put('api/assignment/form/:formId/field/:fieldId', function(req, res){
        res.json(model.UpdateFormField(req.params.formId, req.params.fieldId, req.body));
    });
}
