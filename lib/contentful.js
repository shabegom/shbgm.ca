require("dotenv").config();
const contentful = require("contentful");

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

client.getEntries().then(response => {
  module.exports.highlights = response.items.filter(
    item => item.sys.contentType.sys.id === "highlight"
  );
  module.exports.people = response.items.filter(
    item => item.sys.contentType.sys.id === "person"
  );
  module.exports.person = id =>
    module.exports.people
      .filter(person => person.sys.id === id)
      .reduce(person => person.fields);
  module.exports.jobs = response.items.filter(
    item => item.sys.contentType.sys.id === "job"
  );
});
