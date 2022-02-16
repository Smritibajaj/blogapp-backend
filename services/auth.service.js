const { createUniqueHash, signNewToken } = require('../helper/auth.helper');
const UserService = require('../services/user.service');

const AuthService = {
    signUpUser: async ({ email, password, userName }) => {
        const isUserExist = await UserService.getUserByEmail(email);
        if(!isUserExist) { //Create New user
            const newUser = await UserService.createNewUser({
                email,
                password: createUniqueHash(password),
                userName
            });
            return {
                user:newUser,
                token:signNewToken(newUser._id)
            }
        }
        return Promise.reject({
            type: 'APP/DUPLICATE_USER',
            message: 'User already exist.'
        })
    }
};

module.exports = AuthService;