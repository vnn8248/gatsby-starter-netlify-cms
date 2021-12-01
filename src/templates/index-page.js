import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

import * as styles from "../../static/css/styles.module.css";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImage,
  heroHeading,
  heroSubheading,
  mainpitch,
  intro,
}) => {
  // const heroImage = getImage(heroImage) || heroImage;

  const resumePath = `/img/${mainpitch.resume.relativePath}`;
  const imagePath = `/img/${mainpitch.picture.relativePath}`;

  return (
    <div>
      <FullWidthImage img={heroImage} title={heroHeading} subheading={heroSubheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-6">
                      <img className={styles.profilePic} src={imagePath} alt="Jess Schultz" width="200" height="200"></img>
                    </div>
                    <div className="column is-6">
                      <h1 className="title">{mainpitch.title}</h1>
                      <h3 className="subtitle">{mainpitch.description}</h3>
                      <a className="btn" href={resumePath} download>Resume</a>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {intro.heading}
                      </h3>
                      <p>{intro.description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="column is-12">
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  siteTitle: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        siteTitle={frontmatter.siteTitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        siteTitle
        heroImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroHeading
        heroSubheading
        mainpitch {
          picture {
            relativePath
          }
          title
          description
          resume {
            relativePath
          }
        }
        intro {
          blurbs {
            image {
              relativePath
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
