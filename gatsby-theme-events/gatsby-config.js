module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  siteMetadata: {
    title: 'Gatsby Events Theme',
    headline: 'Upcoming Events',
    basePath
  },
  __experimentalThemes: ['gatsby-theme-ui'],
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath
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
