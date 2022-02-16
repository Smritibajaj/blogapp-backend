const { UserModel } = require('../models');
const UserService = {
    getUserById: async(userId, toSelect, toPopulate) => {
        return UserModel.readOneByKey({_id: userId}, toSelect, toPopulate)
    },
    getUserByUName: async({ userName, userId }, toSelect, toPopulate) => {
        return UserModel.readOneByKey({
            _id: {
                $ne: userId
            },
            userName,
        }, ['_id'])
    },
    getUserByEmail: async (email, toSelect, toPopulate) => {
        return UserModel.readOneByKey({email}, toSelect, toPopulate)
    },
    createNewUser: async (user) => {
        return UserModel.create(user);
    },
    updateUserProfile: async(query, condition) => {
        return UserModel.update(
            query,
            condition,
            { new: true }
        )
    },
}

module.exports = UserService;