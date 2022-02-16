const router = require("express").Router({
  caseSensitive: true,
  strict: true,
});
const { AuthController } = require("../controllers/index");
const { checkError } = require("../helper/validation");
const {
  validateSignUpRequest,
  validateSignInRequest,
} = require("../validators/auth.validator");

router
  .route("/signin")
  .post(validateSignInRequest, checkError, AuthController.signIn);

console.log('reading');
router
  .route("/signup")
  .post(validateSignUpRequest, checkError, AuthController.signUp);

module.exports = router;
