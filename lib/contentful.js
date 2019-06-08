require("dotenv").config();
const contentful = require("contentful");

const SPACE_ID = process.env.SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

client.getEntries().then(async response => {
  module.exports.highlights = await response.items.filter(
    item => item.sys.contentType.sys.id === "highlight"
  );

  module.exports.people = await response.items.filter(
    item => item.sys.contentType.sys.id === "person"
  );

  module.exports.jobs = await response.items.filter(
    item => item.sys.contentType.sys.id === "job"
  );

  module.exports.stats = await response.items.filter(
    item => item.sys.contentType.sys.id === "stats"
  );

  module.exports.insights = await response.items.filter(
    item => item.sys.contentType.sys.id === "insights"
  );

  module.exports.person = function person(id) {
    return module.exports.people.filter(person => person.sys.id === id);
  };

  module.exports.highlight = function highlight(id) {
    return module.exports.highlights.filter(
      highlight => highlight.sys.id === id
    );
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
});
