module.exports = {
    siteMetadata: {
        title: 'kjmin Portfolio',
    },
    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'kjmin Portfolio',
                short_name: 'Kyoungjun Min',
                start_url: '/',
                icon: 'src/images/gatsby-icon.png',
            },
        },
    ],
}
