// @flow strict
import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import Gist from "../components/Gist";

import { useSiteMetadata } from "../hooks";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import styles from "../components/Layout/Layout.module.scss";

const PageTemplate = (props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = "Timeline...";
  const socialImageUrl = "/media/image-2.jpg";
  const pageTitle = "Snippets";
  const users = props.data.allRandomUser.edges;

  return (
    <Layout
      title={pageTitle}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div>
          {users &&
            users.map((item, index) => (
              <div className={styles.cardContainer} key={index}>
                <div className={styles.descriptionContainer}>
                  <strong>{item.node.title}</strong>
                  <Gist url={item.node.html_url} />
                </div>
              </div>
            ))}
        </div>
      </Page>
    </Layout>
  );
};

export default PageTemplate;

export const query = graphql`
  query RandomUserQuery {
    allRandomUser {
      edges {
        node {
          id
          created_at
          title
          html_url
        }
      }
    }
  }
`;
