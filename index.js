const express = require('express')
if (process.env.NODE_ENV !== "production") { require('dotenv').config() }
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const appSchema = require('./graphql/schema')
const appResolvers = require('./graphql/resolvers/index')
const auth = require('./middleware/auth')


const app = express()
app.use(auth)
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connection.once('open', () => console.log("🚀 connected to mongo db successfully"));

app.use('/graphql', graphqlHTTP({ schema: appSchema, rootValue: appResolvers, graphiql: true }));





app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
});