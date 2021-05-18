module.exports = {
  siteMetadata: {
    title: `Cartel`,
    description: `Cartel is an Editing and Post-Production facility in Santa Monica.`,
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
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Cartel',
        fieldName: 'cartel',
        url: 'https://pnm.059.myftpupload.com/graphql',
        refetchInterval: 30,
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
