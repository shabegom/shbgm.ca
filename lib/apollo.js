import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

let uri = {
  local: "192.168.6.114:34567/server",
  production: `/.netlify/functions/server`
};

const config = {
  link: new HttpLink({
    credentials: "same-origin",
    uri: uri.production
  })
};

export default withData(config);
