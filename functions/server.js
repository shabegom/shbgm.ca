const { ApolloServer, gql } = require("apollo-server-lambda");
const content = require("../lib/contentful.js");

const typeDefs = gql`
  type Highlight {
    title: String
    detail: [String]
<<<<<<< HEAD
    job: JobLink
=======
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
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
<<<<<<< HEAD
    highlight: [HighlightLink]
  }
  type JobLink {
    sys: LinkSys
  }
  type HighlightLink {
    sys: LinkSys
=======
    highlight: [HighlightObject]
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
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
<<<<<<< HEAD
    jobs: [JobObject]
    flair: String
    description: String
  }
  type Stat {
    stat: String
    description: String
    order: Int
  }

  type Insight {
    title: String
    point: [String]
    pointDescription: [String]
  }

=======
    job: [JobObject]
    flair: String
    description: String
  }
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
  type PersonObject {
    sys: Sys
    fields: Person
  }
<<<<<<< HEAD

  type StatObject {
    sys: Sys
    fields: Stat
  }
  type InsightObject {
    sys: Sys
    fields: Insight
  }
=======
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
  type Query {
    hello: String

    people: [PersonObject]
    highlights: [HighlightObject]
    jobs: [JobObject]
<<<<<<< HEAD
    stats: [StatObject]
    insights: [InsightObject]

    person(id: String!): PersonObject
    highlight(id: String!): HighlightObject
    job(id: String!): JobObject
    stat(id: String!): StatObject
    insight(id: String!): InsightObject
=======

    person(id: String!): [Person]
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
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
<<<<<<< HEAD
    person: (parent, { id }) => ({ id }),
=======
    person: (parent, args, context) => {
      return content.person(args.id);
    },
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
    highlights: (parent, args, context) => {
      return content.highlights;
    },
    jobs: (parent, args, context) => {
      return content.jobs;
<<<<<<< HEAD
    },
    stats: (parent, args, context) => {
      return content.stats;
    },
    insights: (parent, args, context) => {
      return content.insights;
    },
    highlight: (parent, args, context) => {
      return content.highlight(args.id);
=======
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
    }
  }
};

const server = new ApolloServer({
<<<<<<< HEAD
  cors: {
    origin: "*",
    credentials: true
  },
=======
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
  typeDefs,
  resolvers
});

<<<<<<< HEAD
exports.handler = server.createHandler({});
=======
exports.handler = server.createHandler();
>>>>>>> 0088f4ce6abf7c1fab9a6c37a4e1e37be68c2e42
