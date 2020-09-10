const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type AuthData {
      token: String!
}


type Graph {
    _id: ID!
    labels: [String!]!
    data: [Int!]!
    backgroundColor: [String!]!
    createdAt: String!
    updatedAt: String!      
}

input UserInput {
    name: String!
    email: String!
    password: String!
    }

type  User {
    _id: ID!
    name: String!
    email: String!
    graphCount:Int
    createdGraphs: [Graph]
    createdAt: String!
    updatedAt: String!
}


type Query{
    hello : String!
    login(email: String!, password: String!): AuthData
    user : User
}


type Mutation{
    createUser(input: UserInput): User
    createGraph (labels: [String!]!,data: [Int!]!, backgroundColor: [String!]!) : User
    deleteGraph (id :ID!) : User
}



`)