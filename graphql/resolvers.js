const User = require('../models/User')

module.exports = {
    Query: {
        async user(_, {ID}){
            return await User.findById(ID)
        },

        async getUsers(_){
            return await User.find().sort({createdAt: -1})
        }
    },
    Mutation: {
        async createUser(_, {userInput: {name, age, email}}){
            const createdUser = new User({
                name: name,
                age: age,
                email: email,
                createdAt: new Date().toISOString()
            })

            const res = await createdUser.save()

            return {
                id: res.id,
                ...res._doc
            }
        },

        async deleteUser(_, {ID}){
            const wasDeleted = (await User.deleteOne({_id: ID})).deletedCount
            return wasDeleted
        },
        async editUser(_, {ID, userInput: {name, age, email}}){
            const wasEdited = (await User.updateOne({_id: ID}, {name: name, age: age, email: email})).modifiedCount;
            return wasEdited
        }
    }
}
