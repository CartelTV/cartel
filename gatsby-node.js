const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // query content for WordPress posts
  const {
    data: {
      cartel: { editorDetailPages },
    },
  } = await graphql(`
    query {
      cartel {
        editorDetailPages {
          nodes {
            id
            slug
          }
        }
      }
    }
  `);

  const editorDetailTemplate = path.resolve(`./src/templates/editorDetail.js`);

  editorDetailPages.nodes.forEach(page => {
    createPage({
      // will be the url for the page
      path: page.slug,
      // specify the component template of your choice
      component: slash(editorDetailTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this page's data.
      context: {
        id: page.id,
      },
    });
  });
};
