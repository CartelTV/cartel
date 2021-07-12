// import React from 'react';
// import { Link } from 'gatsby';

// import { Layout } from '../components/layout';
// import SEO from '../components/seo';

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <div className="container">
//       <h1>Sorry</h1>
//       <p>
//         It seems you&apos;ve ended up on a page that does not exist.{' '}
//         <Link to="/work">Click here to get back on track</Link>.
//       </p>
//       <br />
//     </div>
//   </Layout>
// );

// export default NotFoundPage;

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return null;
};

export default NotFoundPage;
