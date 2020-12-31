module.exports = {
    pathPrefix: "",
    siteMetadata: {
        title: "Netri Dosa",
        description: "Wbsite description!",
        keywords: "netri dosa, netri, dosa, dry dosa, website, greenbird, greenbird digital",
        author: "Greenbird Digital",
        url: "https://www.greenbirddigital.com/",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'yaml-content-images',
                path: `${__dirname}/content/images/`,
            },
        },
    ]
}
