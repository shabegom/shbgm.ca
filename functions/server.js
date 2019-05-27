import { ApolloServer, gql } from "apollo-server-lambda";
import fetch from "isomorphic-unfetch";

let baseURL = "https://cdn.contentful.com/";
let SPACE_ID = "xvhcrcp1tdxm";
let ACCESS_TOKEN = "lVv58DHlqjwn9_VfbEW-mHPHz5q6otazpvV3MfFAcDU";
let space = `spaces/${this.SPACE_ID}/`;
let environment = "environments/master/";
let token = `?access_token=${this.ACCESS_TOKEN}`;

async function getAllPeople() {
  return fetch(
    `${this.space}${this.environment}content_types/person${this.token}`
  ).then(res => res.json());
}

const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    Headline: String
    Description: String
    Flair: String
  }
  type Query {
    person(name: String!): Person
    people: [Person]
  }

`;

const resolvers = {
  Query: {
    people: () => getAllPeople()
  },
  Person: {
    name: res => res
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
