// Access Token middleware

var Validation = require("node-oyster").Helpers.validation,
    unAuthenticatedError = require("node-oyster").Errors.unAuthenticatedError,
    notFoundError = require("node-oyster").Errors.notFoundError;
    //Security = require("../helpers/security");
    
var validateAccessToken = function (req, res, next) {

    return next();

    //// validate access_token
    //var accesstoken = req.param("access_token");
    //var err = Validation.validateArguments([{
    //    param: "access_token",
    //    value: accesstoken,
    //    required: true
    //}]);
    //
    //if (err) {
    //    next(err);
    //    return;
    //}
    //
    //Security.getUserSession(accesstoken).then(function (user) {
    //
    //    req.user_id = user.user_id;
    //    req.user = user;
    //    req.user_rights = user.rights;
    //    req.access_token = accesstoken;
    //    req.other_user_id = user.user_id;
    //
    //    req.token = accesstoken;
    //    next();
    //})
    //.catch(unAuthenticatedError, function (e) {
    //    next(e);
    //    return;
    //})
    //.catch(notFoundError, function(e){
    //    next(e);
    //    return;
    //})
    //.error(function (e) {
    //    next(e);
    //    return;
    //});

};

module.exports = validateAccessToken;

