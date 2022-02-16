const { JWT_SECRET } = require('../configs/app.config');
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt, Strategy } = require('passport-jwt');
const { UserModel } = require('../models/index');
const { isPasswordMatch } = require('./auth.helper');
const localLogin = async(req, username, password,  callback) => {
    try {
        const user = await UserModel.readOneByKey(
            { email: username },
        );
        if(!user) return callback(null, false, {
            type: 'APP/EMAIL_CONFLICT',
            message: "User doesn't exist."
        });
        const { password:currentPassword } = user;

        //Check for password match
        if(!isPasswordMatch(password, currentPassword)) return callback(null, false, {
            type: 'APP/PASSWORD_CONFLICT',
            message: 'Invalid password!'
        })
        //Sanitize user Object
        return callback(null, user);
    } catch(err) {
        console.log({err});
        callback(err, false);
    }
};

const jwtVerify = async(req, payload, callback) => {
    try {
        const { _id } = payload || {};
        const user = await UserModel.readOneByKey(
            { _id }
        );
        if(!user) return callback(null, false);
        return callback(null, user);
        //Fetch user Details
    } catch(err) {
        callback(err, false)
    }
};

const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, localLogin);

const JwtStrategy = new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:JWT_SECRET,
    passReqToCallback: true
}, jwtVerify);

module.exports = {
    localStrategy,
    JwtStrategy
}