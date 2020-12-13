module.exports = {
    siteMetadata: {
        title: 'kjmin Portfolio',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                analyzerPort: 8088,
                production: false,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /icons/, // See below to configure properly
                },
            },
        },
        `gatsby-plugin-preact`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'kjmin Portfolio',
                short_name: 'Kyoungjun Min',
                start_url: '/',
                icon: 'src/images/known.png',
                //icon: 'src/images/gatsby-icon.png',
            },
        },
    ],
}
