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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name,
        icon: "src/images/icon.png",
        start_url: "/",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
  ],
};
