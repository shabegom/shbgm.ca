const { ApolloServer, gql } = require("apollo-server-lambda");
const content = require("../lib/contentful.js");

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
    highlights: [HighlightObject]
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
    jobs: [JobObject]
    flair: String
    description: String
  }
  type Stat {
    stat: String
    description: String
  }

  type Insight {
    title: String
    point: [String]
    pointDescription: [String]
  }

  type PersonObject {
    sys: Sys
    fields: Person
  }

  type StatObject {
    sys: Sys
    fields: Stat
  }
  type InsightObject {
    sys: Sys
    fields: Insight
  }
  type Query {
    hello: String

    people: [PersonObject]
    highlights: [HighlightObject]
    jobs: [JobObject]
    stats: [StatObject]
    insights: [InsightObject]

    person(id: String!): Person
  }

`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello, world!";
    },
    people: (parent, args, context) => {
      return content.people;
    },
    person: (parent, args, context) => {
      return content.person(args.id);
    },
    highlights: (parent, args, context) => {
      return content.highlights;
    },
    jobs: (parent, args, context) => {
      return content.jobs;
    },
    stats: (parent, args, context) => {
      return content.stats;
    },
    insights: (parent, args, context) => {
      return content.insights;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler({});
