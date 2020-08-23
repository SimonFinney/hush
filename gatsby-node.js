/**
 * @file Configuration.
 * @copyright Simon Finney 2020
 */

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) =>
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.vtt$/,
          use: ["file-loader"],
        },
      ],
    },
  });
