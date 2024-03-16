module.exports = `#graphql
type User{
    id: ID!
    name: String
    age: Int
    email: String
    createdAt: String
}

input UserInput {
    name: String
    age: Int
    email: String
}

type Query{
    user(ID: ID!): User!
    getUsers: [User]
}

type Mutation {
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): Boolean
    editUser(ID: ID!, userInput: UserInput): Boolean
}

`