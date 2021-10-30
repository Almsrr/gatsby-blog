import React from "react";

import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://www.rover.com/blog/wp-content/uploads/2018/12/dog-sneeze-1-1024x945.jpg"
        alt="smiling-dog"
      />
      <StaticImage src="../images/dog.jpeg" alt="black-and-white-dog" />
    </Layout>
  );
}

export default IndexPage;
