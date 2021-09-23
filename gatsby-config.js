module.exports = {
  siteMetadata: {
    title: `Cartel`,
    description: `Cartel is an editing and post-production facility in Santa Monica.`,
    siteUrl: `https://cartel.tv/`,
    socialImage: `ABSOLUTE PATH TO IMAGE IN STATIC FOLDER`,
    author: `TWITTER HANDLE`,
  },
  plugins: [
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://admin.cartel.tv/graphql/',
        refetchInterval: 30,
        schema: {
          requestConcurrency: 10,
          timeout: 90000,
        },
        type: {
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
              maxFileSizeBytes: 100000000,
            },
          },
        },
        includedRoutes: [
          '/*/*/menus',
          '/*/*/contact',
          '/*/*/editors',
          '/*/*/musicVideos',
          '/*/*/theLookout',
          '/*/*/work',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'DomaineDisp-Bold',
            'DomaineDispSemibold',
            'Interstate-Black',
            'Interstate-Light',
          ],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cartel`,
        short_name: `Cartel`,
        start_url: `/`,
        background_color: `#ecebe2`,
        theme_color: `#a5daca`,
        display: `minimal-ui`,
        icon: `src/images/cartel-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
  ],
};
