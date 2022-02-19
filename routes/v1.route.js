const router = require("express").Router({
  caseSensitive: true,
  strict: true,
});

const AuthRouter = require("./auth.route");
const UserRouter = require("./user.route");
const BlogRouter = require('./blog.route');
const ImageRouter = require('./image.route');
//Middlewares
const { publicAuthMiddleware } = require("../middlewear/auth");
router.use("/auth", AuthRouter);
router.use("/user", publicAuthMiddleware, UserRouter);
router.use("/blog", publicAuthMiddleware, BlogRouter);
router.use('/images', publicAuthMiddleware, ImageRouter)

module.exports = router;
