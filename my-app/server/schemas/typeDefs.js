const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        tonies: [String]
    }

    type Auth {
        token: ID!
        profile: Profile
    }

# TODO: Update query
    type Query {
        
    }

type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTonie(TonieId: ID!): Profile
}
`;

module.exports = typeDefs;