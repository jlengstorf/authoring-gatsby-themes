import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          headline
          basePath
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
