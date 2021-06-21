// @flow strict
import React, {useState, useEffect} from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { books, notes } from "../utils/data";
import styles from "../components/Layout/Layout.module.scss";

const PublicationTemplate = ({ data }) => {
  const metaDescription = "Timeline...";
  const socialImageUrl = "/media/image-2.jpg";
  const pageTitle = "Download resources compiled by me.";
  const { html } = data.allMarkdownRemark.nodes[0];

  return (
    <Layout
      title={pageTitle}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div>
          <Tabs>
            <TabList>
              <Tab>Books</Tab>
              <Tab>Papers authored by me</Tab>
              <Tab>Notes authored by me</Tab>
              <Tab>My resume</Tab>
            </TabList>
            <TabPanel onSelect={() => setPub(false)}>
              <div>
                {books &&
                  books.map((item, index) => (
                    <div className={styles.cardContainer} key={index}>
                      <div className={styles.imageContainer}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className={styles.descriptionContainer}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                        <Link to={item.more}>Read More</Link>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel onSelect={() => setPub(true)}>
              List of publications grouped by year.
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </TabPanel>
            <TabPanel onSelect={() => setPub(false)}>
              <ul>
                {notes &&
                  notes.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            </TabPanel>
            <TabPanel onSelect={() => setPub(false)}>
              <p>
                My up-to-date resume can be{" "}
                <a href="https://github.com/sureshHARDIYA/Curriculum-Vitae/blob/master/Curriculum_Vitae.pdf">
                  downloaded from GitHub link.
                </a>
                The LaTeX source code for the resume is located{" "}
                <a href="https://github.com/sureshHARDIYA/Curriculum-Vitae">
                  here.
                </a>
              </p>
              <div>
                <ul>
                  <li>
                    <a href="https://www.researchgate.net/profile/Suresh_Mukhiya2">
                      Checkout my ResearchGate Profile
                    </a>
                  </li>
                  <li>
                    <a href="https://scholar.google.com/citations?user=9-fxxeMAAAAJ&hl=no">
                      Checkout my Google Scholar Profile
                    </a>
                  </li>
                </ul>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "page"}, slug: {eq: "paper-publications"}}}) {
      nodes {
        html
        frontmatter {
          title
          slug
        }
      }
    }
  }`;

export default PublicationTemplate;
