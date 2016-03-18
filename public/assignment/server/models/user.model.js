"use strict";
var users = require("./user.mock.json");
var uUid = require("node-uuid");

module.exports = function(app){
    var api = {
        Create: Create,
        FindAll: FindAll,
        FindById: FindById,
        Update: Update,
        Delete: Delete,
        FindUserByUsername: FindUserByUsername,
        FindUserByCredentials: FindUserByCredentials
    };
    return api;

    function Create(user) {
        var newUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            _id: (new Date).getTime()
        };
        users.push(newUser);
        return users;
    }
    function FindAll(){
        return users;
    }
    function FindById(id){
        for (var i in users)
        {
            if (users[i]._id == id)
            return users[i];
        }
        return null;
    }
    function Update(id, user) {
        var chUser = users.indexOf(id);
        users[chUser].username = user.username;
        users[chUser].firstName = user.firstName;
        users[chUser].lastName = user.lastName;
        return users;
    }

    function Delete(id){
        var i = FindById(id);
        var delUser = users.indexOf(i);
        users.splice(delUser,1);
        return users;
        }

    function FindUserByUsername(username){
        for(var i=0;i < users.length; i++)
        {

            if(users[i].username == username){
                return users[i];
            }
        }
        return null;
    }
    function FindUserByCredentials(credentials){
        for(var i=0; i< users.length; i++){
            if(users[i].username == credentials.username && users[i].password == credentials.password)
            return users[i];
        }
        return null;
    }
};
