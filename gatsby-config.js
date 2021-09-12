module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "gatsby-boilerplate",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-transition-link",
        },
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('autoprefixer')(), require('tailwindcss')('./tailwind.config.js')],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `./src/markdown-pages`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-code-titles',
                        options: {
                            className: 'gatsby-remark-code-title',
                        },
                    },
                    {
                        resolve: "gatsby-remark-code-buttons",
                        options: {
                            tooltipText: `Copy to clipboard`,
                            toasterText: "Copied to clipboard",
                            toasterDuration: 5000,
                        },
                    },
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },

                ]
            }
        },
        "gatsby-plugin-offline",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-JMDXSEZMR5", // Google Analytics / GA
                ],
                pluginConfig: {
                    head: false,
                    anonymize_ip: true,
                },
            },
        },
    ],
};
