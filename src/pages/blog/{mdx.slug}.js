import React from "react";

import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function BlogPost({ data }) {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <section>
        <Link to="/blog"> {"<--"} </Link>
        <p>Posted: {data.mdx.frontmatter.date}</p>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <p className="text-muted mt-2">
          Photo Credit:{" "}
          <a
            href={data.mdx.frontmatter.hero_image_credit_link}
            target="_blank"
            rel="noreferrer"
          >
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
