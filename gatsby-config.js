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
                    `gatsby-remark-code-titles`,
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },

                ]
            }
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-M84HFG3",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: "gatsby-route-change",
                // Defaults to false
                enableWebVitalsTracking: true,
            },
        },
        "gatsby-plugin-offline"
    ],
};
