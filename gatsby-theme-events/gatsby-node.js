const fs = require('fs');

exports.onPreBootstrap = ({ reporter }) => {
  const dataDir = 'data';

  if (!fs.existsSync(dataDir)) {
    reporter.info(`creating the ${dataDir} directory`);
    fs.mkdirSync(dataDir);
  }
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Event implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      slug: String!
    }
  `);
};

exports.createResolvers = ({ createResolvers }) => {
  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  createResolvers({
    Event: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/events.js')
  });

  const result = await graphql(`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading events', result.errors);
    return;
  }

  const events = result.data.allEvent.nodes;

  events.forEach(event => {
    const slug = event.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/event.js'),
      context: {
        eventID: event.id
      }
    });
  });
};
