const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        tonies: [String]
    }

    type Category {
        _id: ID
        name: String
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Product { 
        _id: ID
        name: String
        description: String
        image: String
        category: Category
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    profile: Profile
    order(_id: ID!): Order
    }

type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
    addTonie(TonieId: ID!): Profile
}
`;

module.exports = typeDefs;