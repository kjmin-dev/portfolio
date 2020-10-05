/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { resolve } = require('path')

exports.onCreateWebpackConfig = function ({ actions }) {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
    })
}
