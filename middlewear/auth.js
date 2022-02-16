const passport = require('passport');
const httpStatus = require('http-status-codes');
exports.publicAuthMiddleware = (req, res, next) => {
    passport.authenticate('jwt', async(err, user, info) => {
        if(!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                status: httpStatus.UNAUTHORIZED,
                body: httpStatus.getStatusText(httpStatus.UNAUTHORIZED)
            })
        }
        req.user = user;
        next();
    }, { session: false })(req, res, next)
}