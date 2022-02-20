 const httpStatus = require('http-status-codes');
 const { UserService } = require('../services/index');
 const { sanitizeUserObject } = require('../helper/user.helper');

 
 
 const ImageController = {
 
     uploadImage : async (req, res) => {
         const response = req.file;
         console.log(response)
        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            response: response
        })
    }
 };
 
 module.exports = ImageController;