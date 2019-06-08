import { withData } from "next-apollo";
import { HttpLink } from "apollo-link-http";

let uri = {
  local: "https://9b8f6b64.ngrok.io/server",
  production: `/.netlify/functions/server`
};

const config = {
  link: new HttpLink({
    credentials: "same-origin",
    uri: uri.production
  })
};

export default withData(config);
