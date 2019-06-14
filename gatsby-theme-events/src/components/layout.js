import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <>
    <header
      style={{
        margin: '0 auto',
        maxWidth: '550px',
        width: '90vw'
      }}
    >
      <Link to="/">Gatsby Events Theme</Link>
    </header>
    <main
      style={{
        margin: '3rem auto',
        maxWidth: '550px',
        width: '90vw'
      }}
    >
      {children}
    </main>
  </>
);

export default Layout;
