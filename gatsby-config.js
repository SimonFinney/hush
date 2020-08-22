/**
 * @file Configuration.
 * @copyright Simon Finney 2020
 */

const { description, name } = require("./package.json");

module.exports = {
  siteMetadata: {
    name,
    description,
  },
  pathPrefix: name,
  plugins: [
    "gatsby-plugin-favicon",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-35182446-5",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        display: "swap",
        fonts: ["Raleway:300"],
      },
    },
    "gatsby-plugin-manifest",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
  ],
};
