                                                                                                                                                                                                "use strict";
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

        var userservice = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return userservice;

        function findUserByCredentials(username, password, callback) {

            users.forEach(function (ele) {
                if (ele.username == username && ele.password == password) {
                    callback(ele);
                }

            })
            return null;
        }


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
        users.forEach(function (ele, index) {
            if (ele._id == userId) {
                ele.username = user_update.username;
                ele.password = user_update.password;
                ele.firstname = user_update.firstname;
                ele.lastname = user_update.lastname;
                ele.email = user_update.email;
                callback(ele);
            }
        });
    }


})();