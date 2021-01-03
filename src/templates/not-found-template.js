// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";

const NotFoundTemplate = ({ data }) => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>
          You just hit a route that doesn&#39;t exist... the sadness. However,
          we have the following links in the backlog.
        </p>
        <ul>
          {data &&
            data.allSitePage.edges.map((item, index) => (
              <li key={index}>
                <a href={item.node.path}>{item.node.path}</a>
              </li>
            ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

export default NotFoundTemplate;
