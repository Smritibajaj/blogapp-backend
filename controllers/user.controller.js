// @ts-nocheck
/**
 * All User Related Controller
 */
 const httpStatus = require('http-status-codes');
 const { UserService } = require('../services/index');
 const { sanitizeUserObject } = require('../helper/user.helper');

 
 
 const UserController = {
 
     /**
      * @description Get Current User
      * @param {Object} headers
      */
     getCurrentUser: async (req, res) => {
         try {
             const { user } = req;
             return res.status(httpStatus.OK).json({
                 status: httpStatus.OK,
                 response: sanitizeUserObject(user)
             });
         } catch(error) {
             res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                 status: httpStatus.INTERNAL_SERVER_ERROR,
                 response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
             })
         }
     },
 
     /**
      * @description Update user profile
      * @param { Object }
      */
     updateUserProfile: async(req, res) => {
         try {
             const { body: { query, condition } } = req;
             const response = await UserService.updateUserProfile(query, condition);
             //logger.info(`[updateUserProfile] Updated user Profile: ${response}`)
             return res.status(httpStatus.OK).json({
                 status: httpStatus.OK,
                 response: sanitizeUserObject(response)
             })
         } catch(error) {
             //logger.error('[updateUserProfile] Error updating Profile', error);
             res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                 status: httpStatus.INTERNAL_SERVER_ERROR,
                 response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
             })
         }
     }
 };
 
 module.exports = UserController;