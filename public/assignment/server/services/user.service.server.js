"use strict";
module.exports = function(app, model){
    app.post('/api/assignment/user', function(req, res){
        res.json(model.Create(req.params.user));
    });
    app.get('/api/assignment/user', function(req,res){
        res.json(model.FindAll());
    });
    app.get('/api/assignment/user/:id', function(req,res){
        res.json(model.FindById(req.params.id));
    });
    app.get('api/assignment/user?username=username', function(req, res){
        res.json(model.FindUserByUsername(req.params.username));
    });
    app.get('api/assignment/user?username=alice&password=wonderland', function(req, res){
        res.json(model.FindUserByCredentials(req.params));
    });
    app.put('/api/assignment/user/:id', function(req, res){
        res.json(model.Update());
    });
    app.delete('/api/assignment/user/:id', function(req, res){
        res.json(model.Delete(req.params.id));
    });
};
