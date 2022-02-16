const router = require("express").Router({
  caseSensitive: true,
  strict: true,
});
const { addNewBlog, checkIsValidBody, sanitizeBody } = require("../validators/blog.validator");
const { checkError } = require("../helper/validation");
const { BlogController } = require("../controllers/index");

router.route("/create").post(addNewBlog, checkError, BlogController.createBlog);

router.route("/allblogs").get(BlogController.getAllBlogs);

router.route("/blog/:id").get(BlogController.getBlog);

router.route("/update/:id").put(
  checkIsValidBody,
  sanitizeBody,
  (req, res, next) => {
    const _id = req.params.id;
    console.log('_id',_id);
    const { body } = req;
    req.body = {
      query: {
        _id: _id,
      },
      condition: {
        $set: body,
      },
    };
    next();
  },
  BlogController.updateBlog
);
router.route("/delete/:id").delete(BlogController.deleteBlog);

module.exports = router;
