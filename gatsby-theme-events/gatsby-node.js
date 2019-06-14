const fs = require('fs');

exports.onPreBootstrap = ({ reporter }) => {
  const dataDir = 'data';

  if (!fs.existsSync(dataDir)) {
    reporter.log(`creating the ${dataDir} directory`);
    fs.mkdirSync(dataDir);
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/events.js')
  });
};
