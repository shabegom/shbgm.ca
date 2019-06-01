const { ApolloServer, gql } = require("apollo-server-lambda");
const fetch = require("isomorphic-unfetch");

let baseURL = "https://cdn.contentful.com/";
let SPACE_ID = "xvhcrcp1tdxm";
let ACCESS_TOKEN = "lVv58DHlqjwn9_VfbEW-mHPHz5q6otazpvV3MfFAcDU";
let space = `spaces/${this.SPACE_ID}/`;
let environment = "environments/master/";
let token = `?access_token=${this.ACCESS_TOKEN}`;

async function getAllPeople() {
  return await fetch(
    `https://cdn.contentful.com/spaces/xvhcrcp1tdxm/environments/master/entries/?access_token=lVv58DHlqjwn9_VfbEW-mHPHz5q6otazpvV3MfFAcDU&content_type=person`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data.items);
      return data.items;
    });
}

async function getPerson(id) {
  return await fetch(
    `https://cdn.contentful.com/spaces/xvhcrcp1tdxm/environments/master/entries/${id}/?access_token=lVv58DHlqjwn9_VfbEW-mHPHz5q6otazpvV3MfFAcDU&content_type=person`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return { id: data.sys.id };
    });
}

const typeDefs = gql`
  type Person {
    id: String!
    name: String
    Headline: String
    Description: String
    Flair: String
  }
  type Query {
    person(id: String!): Person
    people: [Person]
  }

`;

const resolvers = {
  Query: {
    people: () => getAllPeople(),
    person: id => getPerson(id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
