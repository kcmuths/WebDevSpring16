"use strict";
module.exports = function(app, model) {
    app.get("/api/assignment/user/:userId/form", function(req, res) {
        var userId = req.params.userId;
        console.log(userId);
        res.json(model.FindFormsByUserId(req.params.userId));
    });

    app.get("/api/assignment/form/:formId", function(req, res) {
        res.json(model.FindById(req.params.formId));
    });

    app.delete("/api/assignment/form/:formId", function(req, res) {
        res.json(model.Delete(req.params.formId));
    });

    app.post("/api/assignment/user/:userId/form", function(req, res) {
        //var new_form = req.body;
        //new_form.userId = Number(req.params.userId);
        res.json(model.Create(req.body, req.params.userId));
    });

    app.put("/api/assignment/form/:formId", function(req, res) {
        res.json(model.Update(req.params.formId, req.body));
    });
}
