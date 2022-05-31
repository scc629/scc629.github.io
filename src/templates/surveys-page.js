import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const SurveysPageTemplate = ({ title, subtitle, link, image }) => {
  const heroImage = getImage(image) || image;
  return (
    <div style={{ background: '#090a0c' }}>
      <FullWidthImage img={heroImage} title={title} subheading={subtitle} center="true">
        <a href={link} target="_blank" rel="noreferrer"><p className="paragraph link has-text-centered">{link}</p></a>
      </FullWidthImage>
      {/* <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">
                  {title}
                </h2>
                <a href={link} target="_blank" rel="noreferrer"><p className="paragraph link has-text-centered">{link}</p></a>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

SurveysPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SurveysPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SurveysPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        link={post.frontmatter.link}
        content={post.html}
        image={frontmatter.image}
      />
    </Layout>
  );
};

SurveysPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SurveysPage;

export const surveysPageQuery = graphql`
  query SurveysPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        link
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
