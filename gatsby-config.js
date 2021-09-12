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
        "gatsby-plugin-offline",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-JMDXSEZMR5",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 1,
                // Enables Google Optimize using your container Id
                optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "example.com",
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
    ],
};
