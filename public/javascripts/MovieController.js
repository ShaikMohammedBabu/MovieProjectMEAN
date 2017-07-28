var restful = require('node-restful');//it takes a mongoose model and then converts it into rest api
module.exports = function (app,route) {

    //setup the controller for REST
    var rest = restful.model(
        'movie',
        app.models.movie
    ).methods(['get','put','post','delete']);//providing these methods on movie model

    //register this endpoint with the application
    rest.register(app,route);

    //return middleware
    return function (req,res,next) {
        next();
    };
};