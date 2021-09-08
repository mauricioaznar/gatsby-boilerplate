module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "gatsby-boilerplate",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
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
                tableOfContents: {
                    heading: null,
                    maxDepth: 6,
                },
                plugins: [
                    {
                        resolve: "gatsby-remark-code-buttons",
                        options: {
                            tooltipText: `Copy to clipboard`,
                            toasterText: "Copied to clipboard",
                            toasterDuration: 5000,
                        },
                    },
                    `gatsby-remark-code-titles`,
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },

                ]
            }
        },
    ],
};
