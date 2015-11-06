// load config
var config = require("./config")();
require("../lib/components")(); // this will load all external components that will be consumed
var express = require("express"),
app = module.exports = express();
global.Packages.Oyster.Utils.logger("app_name"); //setting up logger info


// all environments
app.set("title", "Oyster-Seed");
process.env.PORT = config.port;

// development only
if ("development" === app.get("env")) {
    //app.set("db uri", "localhost/dev");
    global.showExceptionToClient = true;
}

// production only
if ("production" === app.get("env")) {
    global.showExceptionToClient = false;
}

var bodyParser = require('body-parser');
var methodOverride = require('method-override')
app.use(bodyParser.json());
app.use(methodOverride());

// views
app.set("views", __dirname + "/public/views"); // setting view path
app.set("view engine", "html");

app.use(express.static(__dirname + "/public")); //for static files to serve directly.
app.use(global.Packages.Oyster.Middleware.allow_ajax); // allowing app to deal with ajax calls
app.engine("html", require("ejs").renderFile); //mapping html to ejs renderer for rendering html files
app.use(global.Packages.Oyster.Middleware.param_object); // this middleware add method "" in request object that iterates all params in request object and create object

//app.use(app.router);

require("./appRoutes")(app); // load all routes

app.use(global.Packages.Oyster.Middleware.error_handler); // to handle all the errors that are raised on app (should pass express cycle for e.g must call next(err); )

require("./global_async")().then(function () {
    
    app.listen(process.env.PORT); // this method is identical to http.createServer(app).listen(port);
    global.Logger.info("app started at port: " + process.env.PORT);

}).error(function (e) {
    //log error here
    global.logger.crash(e);
});
// start

