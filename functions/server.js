const { ApolloServer, gql } = require("apollo-server-lambda");
const fetch = require("isomorphic-unfetch");

const typeDefs = gql`
  type Highlight {
    title: String
    detail: [String]
  }
  type HighlightObject {
    sys: Sys
    fields: Highlight
  }
  type Job {
    yearStarted: String
    role: [String]
    description: String
    company: String
    highlight: [HighlightObject]
  }
  type JobObject {
    sys: Sys
    fields: Job
  }
  type Space {
    sys: LinkSys
  }
  type Environment {
    sys: LinkSys
  }
  type ContentType {
    sys: LinkSys
  }
  type LinkSys {
    type: String
    linkType: String
    id: String
  }
  type Sys {
    id: String
    revision: Int
    createdAt: String
    updatedAt: String
    type: String
    locale: String
    space: Space
    environment: Environment
    contentType: ContentType
  }
  type Person {
    name: String
    headline: String
    job: [JobObject]
    flair: String
    description: String
  }
  type PersonObject {
    sys: Sys
    fields: Person
  }
  type Query {
    hello: String
    people: [PersonObject]
    person(id: String!): [Person]
  }

`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world!";
    },
    people: (parent, args, context) => {
      return fetch("https://13ea5d55.ngrok.io/contentful").then(res => res);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
