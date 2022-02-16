const bcrypt = require('bcrypt');
const { PASSWORD_HASH_SALT } = require('../configs/auth.config');
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs/app.config');
module.exports = {
    /**
     * @description Created Unique hash password using bcrupt
     */
    createUniqueHash: (password) => {
        return bcrypt.hashSync(password, PASSWORD_HASH_SALT);
    },

    /**
     * @description Compare password hashes saved on db and password passed
     */
    isPasswordMatch: (password, savedPassword) => {
         return bcrypt.compareSync(password, savedPassword);
    },

    /**
     * @description verify JWT Auth Token
     * @param { string } token
     */
    verifyToken: (token) => {
        
    },

    /**
     *@description Generate New Token 
     @param { string } userId
     */
    signNewToken: (userId) => {
        return JWT.sign({ _id: userId }, JWT_SECRET);
    }
}