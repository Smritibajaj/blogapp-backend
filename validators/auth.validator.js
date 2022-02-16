/**
 * Auth Related Validators
 */
 const { checkSchema, check} = require('express-validator');
 
exports.validateSignInRequest = checkSchema({
    email: {
        notEmpty: true,
        isEmail: true,
        errorMessage: '[Invalid Email]'
    },
    password: {
        notEmpty: true,
        errorMessage: '[Password required]'
    }
})

 
exports.validateSignUpRequest = checkSchema({
    email: {
        notEmpty: true,
        isEmail: true,
        errorMessage: '[Invalid Email]'
    },
    password: {
        notEmpty: true,
        isString: true,
        errorMessage: '[Invalid Password]'
    },
    userName: {
        notEmpty: true,
        isString: true,
        errorMessage: '[Invalid User Name]'
    }
})