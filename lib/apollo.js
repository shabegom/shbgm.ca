import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

const config = {
  link: new HttpLink({
    credentials: "same-origin",
    uri: `/.netlify/functions/server`
  })
};

export default withData(config);
