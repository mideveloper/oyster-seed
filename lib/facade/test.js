
var Promise = global.Packages.Promise,
    _ = global.Packages.lodash,
    Rules = global.Packages.Oyster.Helpers.rules,
    ValidationHelper = global.Packages.Oyster.Helpers.validation;

var TextFacade = global.Packages.Oyster.BaseFacade.extend();

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
TextFacade.prototype.testFunction = function testFunction(inputObject) {

    var rules = new Rules();
    rules.addMulti([{
        id: {
            required: true,
            int: true
        }
    }]);

    //one way to do this validation
    return ValidationHelper.validate(inputObject, rules).then(function(){
        return {
            arr: [0,1,2,3,4,5],
            inputObject: inputObject
        };
    });

    //second way to do this validation
    //return rules.validate(inputObject).then(function(){
    //    return resolve({
    //        arr: arr,
    //        inputObject: inputObject
    //    });
    //});

};

/**
 *
 * comment should be here
 *
 * @param inputObject
 * @returns {Promise}
 */
TextFacade.prototype.counts = function counts(inputObject) {

    return new Promise(function(resolve, reject) {
        return resolve({
            count: [0,1,2,3,4,5].length,
            inputObject: inputObject
        });
    });

};

module.exports = TextFacade;