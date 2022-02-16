const httpStatus = require("http-status-codes");
const { BlogService } = require("../services/index");

const BlogController = {
    createBlog: async (req, res) => {
        try {
            const { user, body } = req;
            const blog = await BlogService.createBlog({...body, owner: user._id});
            return res.status(httpStatus.OK).json({
                status: httpStatus.OK,
                response: blog,
              });
        } catch(error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
            })
        }
    },
    getBlog: async(req, res) => {
        console.log('this is working');
        try {
            console.log('its coming here', req.user)
            const { user } = req;
            const query = {_id: req.params.id, owner: user._id}
            const blogs = await BlogService.getBlogById(query);
            return res.status(httpStatus.OK).json({
                status: httpStatus.OK,
                response: blogs
            })
        } catch(error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
            })
        }
    }, 
    getAllBlogs: async(req, res) => {
        console.log('this is working');
        try {
            console.log('its coming here', req.user)
            const { user } = req;
            const blogs = await BlogService.getAllBlogs(user);
            return res.status(httpStatus.OK).json({
                status: httpStatus.OK,
                response: blogs
            })
        } catch(error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
            })
        }
    }, 
    updateBlog: async(req,res) => {
        try {
            const { body: { query, condition } } = req;
            console.log(query, condition);
            const response = await BlogService.updateBlog(query, condition);
            console.log(response, 'hahhah');
            return res.status(httpStatus.OK).json({
                status: httpStatus.OK,
                response: response
            })
        } catch(error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
            })
        } 
    },
    deleteBlog: async(req,res) => {
        try {
            const _id = req.params.id;
            const { user  } = req;
            const response = await BlogService.deleteBlog({_id, owner: user._id});
            console.log(response, 'hahhah');
            return res.status(httpStatus.OK).json({
                status: httpStatus.OK,
                response: response
            })
        } catch(error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status: httpStatus.INTERNAL_SERVER_ERROR,
                response: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)
            })
        } 
    }
};
module.exports = BlogController;
