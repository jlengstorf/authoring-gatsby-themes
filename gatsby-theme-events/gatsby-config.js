module.exports = ({ dataDir = 'data' }) => ({
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: dataDir
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Event'
      }
    }
  ]
});
