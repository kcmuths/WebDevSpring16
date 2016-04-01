"use strict";
module.exports = function(app, mongoose, db){
    var formModel = require("./models/form.model.server.js")(app, mongoose, db);
    var userModel = require("./models/user.model.server.js")(app, mongoose, db);

    require("./services/field.service.server.js")(app, formModel);
    require("./services/form.service.server.js")(app,formModel);
    require("./services/user.service.server.js")(app, userModel);
};
