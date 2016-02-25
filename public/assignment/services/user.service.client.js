"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);
    function UserService() {
        var users = [
            {
                "_id": 123, "firstName": "Alice", "lastName": "Wonderland",
                "username": "alice", "password": "alice", "roles": ["student"]
            },
            {
                "_id": 234, "firstName": "Bob", "lastName": "Hope",
                "username": "bob", "password": "bob", "roles": ["admin"]
            },
            {
                "_id": 345, "firstName": "Charlie", "lastName": "Brown",
                "username": "charlie", "password": "charlie", "roles": ["faculty"]
            },
            {
                "_id": 456, "firstName": "Dan", "lastName": "Craig",
                "username": "dan", "password": "dan", "roles": ["faculty", "admin"]
            },
            {
                "_id": 567, "firstName": "Edward", "lastName": "Norton",
                "username": "ed", "password": "ed", "roles": ["student"]
            }
        ];

        var user_service = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return user_service;

        function findUserByCredentials(username, password, callback) {

            users.forEach(function (ele) {
                if (ele.username == username && ele.password == password) {
                    callback(ele);
                }

            })
            return null;
        }


        function findAllUsers(callback) {
            callback(users);
        }

        function createUser(user, callback) {
            user._id = (new Date).getTime();
            users.push(user);
            callback(user);
        }

        function deleteUserById(userId, callback) {
            users.forEach(function (ele, index) {
                if (ele._id == userId) {
                    users.splice(index, 1);
                    callback(users);
                }
            })
        }

        function updateUser(userId, user, callback) {
            for (var ele = 0; ele < users.length; ele++) {
                if (users[ele]._id == _id) {
                    users[ele] = user;
                    var user_update = users[ele];
                    break;
                }
                else user_update = null;
            }
            callback(user_update);
        }
    }

})();