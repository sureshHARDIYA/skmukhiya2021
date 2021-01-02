// @flow strict
import React from "react";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";

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
          <div></div>
          <div classnames="contentTabber">
            <div key="1">Content 1</div>
            <div key="2">Content 2</div>
            <div key="3">Content 3</div>
            <div key="4">Content 4</div>
          </div>
        </div>
      </Page>
    </Layout>
  );
};

export default PageTemplate;
