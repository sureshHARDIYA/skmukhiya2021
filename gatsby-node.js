"use strict";
const axios = require("axios");
const crypto = require("crypto");
const map = require("lodash/map");

exports.createPages = require("./gatsby/create-pages");
exports.onCreateNode = require("./gatsby/on-create-node");

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const fetchRandomUser = () =>
    axios.get(`https://api.github.com/users/sureshHARDIYA/gists`);
  // await for results
  const res = await fetchRandomUser();

  // map into these results and create nodes
  res.data.map((user, i) => {
    // Create your node object
    const userNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `RandomUser`, // name of the graphQL query --> allRandomUser {}
      },
      children: [],
      id: user.id,
      title: user.description,
      html_url: `https://gist.github.com/sureshHARDIYA/${user.id}`,
      created_at: user.created_at,
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
  });

  return;
};
