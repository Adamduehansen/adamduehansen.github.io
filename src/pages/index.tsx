import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = function () {
  return (
    <Layout pageTitle='Home'>
      <p>I'm making this by following the Gatsby tutorial!</p>
      <StaticImage
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        src='../images/saga.jpg'
      />
    </Layout>
  );
};

export default IndexPage;
