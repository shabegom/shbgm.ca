import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

const SPACE_ID = process.env.SPACE_ID;
const CDA_TOKEN = process.env.CDA_TOKEN;

const config = {
  link: new HttpLink({
    credentials: "same-origin",
    uri: `http://192.168.6.114:34567/server`
  })
};

export default withData(config);
