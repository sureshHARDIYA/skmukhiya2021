// @flow strict
import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import { useSiteMetadata } from "../hooks";
import type { MarkdownRemark } from "../types";

const lmv = "/images/jpg/lmv.jpg";
const ettbutikk = "/images/jpg/team.webp";
const ntnu = "/images/jpg/ntnu.jpg";
const ntnuteam = "/images/jpg/ntnuteam.jpg";
const intro1 = "/images/jpg/intro1.jpg";
const intro2 = "/images/jpg/intro2.jpg";
const intro3 = "/images/jpg/intro3.jpg";
const hvl = "/images/jpg/hvl.jpg";
const kath = "/images/jpg/kath.jpg";
const pic = "/images/jpg/pic.jpg";

const PageTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const metaDescription = "Timeline...";
  const socialImageUrl = "/media/image-2.jpg";
  const pageTitle = "Timeline for Suresh Kumar Mukhiya";

  return (
    <Layout
      title={pageTitle}
      description={metaDescription}
      socialImage={socialImageUrl}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div>
          <Timeline lineColor={"#5bbc2e"}>
            <TimelineItem
              key="0011"
              dateText="2018/09–Present"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>Ph.D. Candidate</h3>
              <h4>Western Norway University of Applied Sciences</h4>
              <p>
                Computer Science and Information Technology. Currently, I am a
                Ph.D. candidate at Høgskulen på Vestlandet in Bergen. I joined
                HVL on September 3rd, 2018, officially and being recruited for
                INTROMAT (INTroducing personalized Treatment of mental health
                problems using Adaptive Technology).
              </p>
              <img
                src={intro2}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
              <img
                src={intro1}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
              <img
                src={intro3}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
              <img
                src={hvl}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
            </TimelineItem>
            <TimelineItem
              key="001223"
              dateText="2016/07–2017/07"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>Frontend Developer, https://www.24nettbutikk.no/</h3>
              <h4>Sincos Software AS</h4>
              <p>
                24estore is a Norwegian company that develops e-commerce
                solutions for customers around the world. The company uses
                Reactjs, redux, react-router, redux-saga, node etc as front-end
                technologies and Laravel for building API. The development team
                follows TDD paradigm and uses SCRUM as project management tool.
              </p>
              <img
                src={ettbutikk}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
            </TimelineItem>
            <TimelineItem
              key="x001"
              dateText="2014-01/08/2016"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>Masters In Information System</h3>
              <h4>Norwegian University of Science and Technology</h4>
              <ul>
                <li>
                  <strong>Address: </strong>Norway
                </li>
                <li>
                  <strong>Course: </strong> Masters In Information System
                </li>
                <li>
                  <strong>Link: </strong>{" "}
                  <a href="http://www.ntnu.no/">http://www.ntnu.no/</a>
                </li>
              </ul>
              <img
                src={ntnu}
                alt="NTNU"
                style={{ marginTop: "1rem", width: "100%" }}
              />
              <img
                src={ntnuteam}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
            </TimelineItem>
            <TimelineItem
              key="dd001"
              dateText="2008-2013"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>Bachelor in Computer Science and Information Technology</h3>
              <h4>
                Kathford International College of Engineering and Management
              </h4>
              <ul>
                <li>
                  <strong>Award: </strong> Gold Medalist, TU Topper, Voice
                  Chancellor Award
                </li>
                <li>
                  <strong>Address: </strong>Balkumari, Lalitpur, Nepal
                </li>
                <li>
                  <strong>Course: </strong> Bachelor In Computer Science and
                  Information Technology,
                </li>
                <li>
                  <strong>Link: </strong>{" "}
                  <a href="https://www.kathford.edu.np/">
                    https://www.kathford.edu.np/
                  </a>
                </li>
              </ul>
              <img
                src={kath}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
              <img
                src={pic}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="2005 – 2007"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>Higher Secondary Education Board (HSEB)</h3>
              <h4>Caspian Valley College</h4>
              <ul>
                <li>
                  <strong>Grade: </strong> 83.5%
                </li>
                <li>
                  <strong>Address: </strong> Nepal, Kathmandu Valley
                </li>
                <li>
                  <strong>Course: </strong> HSEB
                </li>
                <li>
                  <strong>Link: </strong>{" "}
                  <a href="http://www.caspian.edu.np/">
                    http://www.caspian.edu.np/
                  </a>
                </li>
              </ul>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText="1994 - 2004"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>Schooling</h3>
              <h4>Primary Level Education</h4>
              <ul>
                <li>Evergreen English Boarding School, Jeetpur, Birgung</li>
                <li>Northstar English Boarding School, Rajbiraj </li>
                <li>
                  Lalitpur Secondary English Boarding School, 2004, SLC
                  (84.24%), Course: School Leaving Certificate. Link:{" "}
                  <a href="http://www.lmv.edu.np/">http://www.lmv.edu.np/</a>
                </li>
              </ul>
              <img
                src={lmv}
                alt="LMV"
                style={{ marginTop: "1rem", width: "100%" }}
              />
            </TimelineItem>
            <TimelineItem
              key="004"
              dateText="30/12/1989"
              dateInnerStyle={{ background: "#5bbc2e" }}
              bodyContainerStyle={{
                borderRadius: "6px",
                boxSizing: "border-box",
                boxShadow: "3px 3px 10px 0px rgba(46,61,73,0.2)",
                padding: "0.687rem",
              }}
            >
              <h3>The day I was born</h3>
              <h4>Venue: Hardiya-6, Kataiya, Saptari, Nepal</h4>
              <p>
                There is not much official documentation about my birth mainly
                because it was not mandatory to keep official record at that
                time. But based on the personal documentation kept by my
                parents, my DOB was officially recorded.
              </p>
            </TimelineItem>
          </Timeline>
        </div>
      </Page>
    </Layout>
  );
};

export default PageTemplate;
