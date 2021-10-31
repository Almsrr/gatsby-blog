import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <Helmet>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
      </Helmet>

      <header>
        <div className="container-fluid">
          <h1 className="display-3 text-center">
            {data.site.siteMetadata.title}
          </h1>
        </div>
      </header>
      <nav>
        <div className="container-fluid">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="py-4">
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
}

export default Layout;
