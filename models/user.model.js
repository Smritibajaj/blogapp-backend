const mongoose = require('mongoose');
const User = mongoose.model('user');

exports.create = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

exports.readByKey = async (query, sortBy = null, limit = null) => {
    const user = await User.find(query, sortBy, limit).lean();
    return user;
};


exports.readOneByKey = async(query, select = [], populate = []) => {
    const user = await User.findOne(query)
        .populate(populate)
        .select(select)
        .lean();
    return user;
};

exports.readSelectedByKey = async(query, select = [], populate = []) => {
    const users = await User.find(query)
        .populate(populate)
        .select(select)
        .lean();
    return users;
};

exports.update = async(query, condition, options = { new: false }) => {
    return User.findOneAndUpdate(query, condition, options)
    .lean()
}