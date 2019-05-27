import { ApolloServer, gql } from "apollo-server-lambda";
import { RESTDataSource } from "apollo-datasource-rest";

// Setup the REST API
class ContentfulAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://cdn.contentful.com/";
    this.SPACE_ID = "xvhcrcp1tdxm";
    this.ACCESS_TOKEN = "lVv58DHlqjwn9_VfbEW-mHPHz5q6otazpvV3MfFAcDU";
    this.space = `spaces/${this.SPACE_ID}/`;
    this.environment = "environments/master/";
    this.token = `?access_token=${this.ACCESS_TOKEN}`;
  }

  async getAllPeople() {
    return this.get(
      `${this.space}${this.environment}content_types/person${this.token}`
    );
  }
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
    people: (root, args, { dataSources }) =>
      dataSources.contentfulAPI.getAllPeople()
  },
  Person: {
    name: res => res
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    contentfulAPI: new ContentfulAPI()
  })
});

exports.handler = server.createHandler();
