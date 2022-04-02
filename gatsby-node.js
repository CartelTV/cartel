const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Editor Detail pages
  const editorDetailResult = await graphql(`
    {
      allWpEditorDetailPage(limit: 50) {
        nodes {
          id
          slug
          databaseId
        }
      }
    }
  `);

  if (editorDetailResult.errors) {
    reporter.error(
      'There was an error fetching posts',
      editorDetailResult.errors
    );
  }

  const { allWpEditorDetailPage } = editorDetailResult.data;

  const editorDetailTemplate = path.resolve(`./src/templates/editorDetail.js`);

  allWpEditorDetailPage.nodes.forEach(page => {
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
  const videoDetailResult = await graphql(`
    {
      allWpVideoDetailPage(limit: 600) {
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
  `);

  if (videoDetailResult.errors) {
    reporter.error(
      'There was an error fetching posts',
      editorDetailResult.errors
    );
  }

  const { allWpVideoDetailPage } = videoDetailResult.data;

  const videoDetailTemplate = path.resolve(`./src/templates/videoDetail.js`);

  allWpVideoDetailPage.nodes.forEach(page => {
    const { editorId } = page.videoDetail;

    const editorObj = allWpEditorDetailPage.nodes.find(
      editor => editor.databaseId.toString() === editorId.trim()
    );

    const editorSlug = editorObj && editorObj.slug;
    let pageSlug;
    if (page.slug.endsWith('-2')) {
      pageSlug = page.slug.substring(0, page.slug.length - 2);
    } else {
      pageSlug = page.slug;
    }

    createPage({
      // will be the url for the page
      path: `${editorSlug}/${pageSlug}`,
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
  const genericPageResult = await graphql(`
    {
      allWpPage {
        nodes {
          id
          content
          slug
          title
        }
      }
    }
  `);

  if (videoDetailResult.errors) {
    reporter.error(
      'There was an error fetching posts',
      editorDetailResult.errors
    );
  }

  const { allWpPage } = genericPageResult.data;

  const genericPageTemplate = path.resolve(`./src/templates/genericPage.js`);

  allWpPage.nodes
    .filter(
      page =>
        page.title !== 'Contact' &&
        page.title !== 'Editors' &&
        page.title !== 'Music Videos' &&
        page.title !== 'The Lookout' &&
        page.title !== 'Work' &&
        page.title !== 'Cartel Films'
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
        },
      });
    });
};
