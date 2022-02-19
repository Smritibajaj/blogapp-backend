// @ts-nocheck
/**
 * All User Related Controller
 */
 const httpStatus = require('http-status-codes');
 const { UserService } = require('../services/index');
 const { sanitizeUserObject } = require('../helper/user.helper');

 
 
 const ImageController = {
 
     uploadImage : async (req, res) => {
        res.send(req.file)
    }
 };
 
 module.exports = ImageController;