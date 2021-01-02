// @flow strict
import React from "react";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PageTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = "Timeline...";
  const socialImageUrl = "/media/image-2.jpg";
  const pageTitle = "Download resources compiled by me.";

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
              <Tab>My resume</Tab>
              <Tab>Books</Tab>
              <Tab>Notes authored by me</Tab>
              <Tab>Papers authored by me</Tab>
            </TabList>

            <TabPanel>
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
            <TabPanel>Coming soon!</TabPanel>
            <TabPanel>Coming soon!</TabPanel>
            <TabPanel>Coming soon!</TabPanel>
          </Tabs>
        </div>
      </Page>
    </Layout>
  );
};

export default PageTemplate;
