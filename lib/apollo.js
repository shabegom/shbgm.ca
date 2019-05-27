import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

const SPACE_ID = process.env.SPACE_ID;
const CDA_TOKEN = process.env.CDA_TOKEN;

const config = {
  link: new HttpLink({
    credentials: "same-origin",
    uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/explore?access_token=${CDA_TOKEN}`
  })
};

export default withData(config);
