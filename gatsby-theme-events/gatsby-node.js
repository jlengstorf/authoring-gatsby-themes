const fs = require('fs');

exports.onPreBootstrap = ({ reporter }) => {
  const dataDir = 'data';

  if (!fs.existsSync(dataDir)) {
    reporter.log(`creating the ${dataDir} directory`);
    fs.mkdirSync(dataDir);
  }
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== 'Event') {
    return;
  }

  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  const slug = slugify(node.name);

  actions.createNodeField({
    node,
    name: 'slug',
    value: slug
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/events.js')
  });

  const result = await graphql(`
    query {
      allEvent(sort: { fields: start_date, order: ASC }) {
        nodes {
          id
          fields {
            slug
          }
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
    const slug = event.fields.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/event.js'),
      context: {
        eventID: event.id
      }
    });
  });
};
