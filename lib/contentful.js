require("dotenv").config();
const contentful = require("contentful");

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

module.exports.highlights = client
  .getEntries({ content_type: "highlight" })
  .then(response => response.items);

module.exports.people = client
  .getEntries({ content_type: "person" })
  .then(response => response.items);

module.exports.jobs = client
  .getEntries({ content_type: "job" })
  .then(response => response.items);

module.exports.stats = client
  .getEntries({ content_type: "stats" })
  .then(response => response.items);

module.exports.insights = client
  .getEntries({ content_type: "insights" })
  .then(response => response.items);

module.exports.person = function person(id) {
  return module.exports.people.filter(person => person.sys.id === id);
};

module.exports.highlight = function highlight(id) {
  return module.exports.highlights.filter(highlight => highlight.sys.id === id);
};

module.exports.job = function job(id) {
  return module.exports.jobs.filter(job => job.sys.id === id);
};

module.exports.stat = function stat(id) {
  return module.exports.stats.filter(stat => stat.sys.id === id);
};

module.exports.insight = function insight(id) {
  return module.exports.insights.filter(insight => insight.sys.id === id);
};
