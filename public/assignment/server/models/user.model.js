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
        user._id = uUid.v1();
        users.push(user);
        return user;
    }
    function FindAll(){
        return users;
    }
    function FindById(_id){
        for (var i = 0; i< users.length; i++)
        {
            if (users._id == _id)
            return users[i];
        }
        return null;
    }
    function Update(_id, new_user){
        var user = FindById(_id);
        console.log("calling update, respond ");
        for(var i in new_user)
        {
            user[i] = new_user[i];
        }
        return users;
    }
    function Delete(_id){
        var i = users.findIndex(function (item, i, array){
            return item._id == _id;
        });
        if (i != -1){
            user.splice(i,1);
        }
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
