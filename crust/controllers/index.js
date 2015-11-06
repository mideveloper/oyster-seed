// Please remove this code its only for example purpose

var TestFacade = require("../../lib/facade/test");

function testFunction(req, res, next){

    var testFacade = new TestFacade(req);

    testFacade.testFunction(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
        next(e);
    });
}

function counts(req, res, next){

    var testFacade = new TestFacade(req);

    testFacade.counts(req.getInputObject()).then(function(output){
        res.status(200).send(global.shape(output))
    }).catch(function(e){
            next(e);
        });
}

module.exports.testFunction = testFunction;
module.exports.counts = counts;