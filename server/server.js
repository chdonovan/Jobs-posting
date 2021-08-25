const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

// serve up static assets (images)
app.use('/images', express.static(path.join(__dirname, '../client/images')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  
db.once('open', () => {
    app.listen(PORT, () => {
        // server
      console.log(`API server running on port ${PORT}!`);
      // graphql
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
