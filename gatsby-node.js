const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Editor Detail pages
  const {
    data: {
      cartel: { editorDetailPages },
    },
  } = await graphql(`
    query {
      cartel {
        editorDetailPages(first: 50) {
          nodes {
            databaseId
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

  // Video Detail pages
  const {
    data: {
      cartel: { videoDetailPages },
    },
  } = await graphql(`
    query {
      cartel {
        videoDetailPages(first: 300) {
          nodes {
            id
            slug
            videoDetail {
              editor
              editorId
            }
          }
        }
      }
    }
  `);

  const videoDetailTemplate = path.resolve(`./src/templates/videoDetail.js`);

  videoDetailPages.nodes.forEach(page => {
    const { editorId } = page.videoDetail;

    const editorObj = editorDetailPages.nodes.find(
      editor => editor.databaseId.toString() === editorId
    );
    const editorSlug = editorObj.slug;

    createPage({
      // will be the url for the page
      path: `${editorSlug}/${page.slug}`,
      // specify the component template of your choice
      component: slash(videoDetailTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this page's data.
      context: {
        id: page.id,
        editorId: parseInt(editorId, 10),
      },
    });
  });

  // Generic pages
  const {
    data: {
      cartel: {
        pages: { nodes },
      },
    },
  } = await graphql(`
    query {
      cartel {
        pages {
          nodes {
            content
            pageId
            slug
            title
          }
        }
      }
    }
  `);

  const genericPageTemplate = path.resolve(`./src/templates/genericPage.js`);

  nodes
    .filter(
      page =>
        page.title !== 'Contact' &&
        page.title !== 'Editors' &&
        page.title !== 'Music Videos' &&
        page.title !== 'The Lookout' &&
        page.title !== 'Work'
    )
    .forEach(page => {
      createPage({
        // will be the url for the page
        path: page.slug,
        // specify the component template of your choice
        component: slash(genericPageTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this page's data.
        context: {
          id: page.id,
          pageId: page.pageId,
        },
      });
    });
};
