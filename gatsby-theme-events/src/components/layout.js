import React from 'react';
import { Layout as ThemeLayout, Header, Main, Container } from 'theme-ui';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

const Layout = ({ children }) => {
  const meta = useSiteMetadata();

  return (
    <ThemeLayout>
      <Header>
        <Link to={meta.basePath}>{meta.title}</Link>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  );
};

export default Layout;
