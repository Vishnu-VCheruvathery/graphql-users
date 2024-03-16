require('dotenv').config();

const {ApolloServer} = require('@apollo/server')
const {startStandaloneServer} = require('@apollo/server/standalone')
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

async function startServer() {
    // Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true 
    });

    await mongoose.connect(MONGO_URL);

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startServer().catch(error => {
    console.error('Error starting server:', error);
});