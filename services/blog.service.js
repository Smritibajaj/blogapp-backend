const { BlogModel } = require('../models');
const BlogService = {
    getBlogById: async(query, toSelect, toPopulate) => {
        const blog = await BlogModel.readOneByKey(query, toSelect, toPopulate)
        return blog
    },
    getAllBlogs: async(user) => {
        const $toSelect = ['title description']
        console.log('coming here in service')
        const blogs = await BlogModel.readSelectedByKey({
          owner: user._id
        });
        return blogs;
      },
    createBlog: async (blog) => {
        return BlogModel.create(blog);
    },  
    updateBlog: async(query, condition) => {
        console.log(query,condition, 'in service')
        const update = await BlogModel.update(
            query,
            condition,
            { new: true }
        )
        console.log(update);
        return update;
    },
    deleteBlog: async(query) => {
        console.log(query, 'in service')
        const deleteBlog = await BlogModel.delete(
            query,
        )
        console.log(deleteBlog);
        return deleteBlog;
    },
}

module.exports = BlogService;