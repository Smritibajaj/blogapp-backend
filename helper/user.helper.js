

 class UserHelper {
 
     /**
      * @description Sanitize user object, removes(password, etc..)
      */
     sanitizeUserObject(rawObject) {
         delete rawObject.password;
         delete rawObject.authType;
         return rawObject;
     }
 }
 
 module.exports = new UserHelper();