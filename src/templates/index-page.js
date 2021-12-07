import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import PortfolioGrid from "../components/Portfolio";
import Experience from "../components/Experience";

import * as styles from "../../static/css/styles.module.css";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImage,
  heroHeading,
  heroSubheading,
  shortBio,
  whatImDoingNow,
  portfolio,
  experience
}) => {
  const fullHeroImage = getImage(heroImage) || heroImage;
  const profileImage = getImage(shortBio.picture) || shortBio.picture;

  const resumePath = `/img/${shortBio.resume.relativePath}`;

  return (
    <div className={styles.outer}>
      <FullWidthImage img={fullHeroImage} heroHeading={heroHeading} heroSubheading={heroSubheading} />
        <div className="container">
          <div className="content">
            <div className="columns mb-12 mt-6 mb-6" id="about">
              <div className="column is-6">
                <GatsbyImage image={profileImage} alt="Jess Schultz" className={styles.profilePic} />
              </div>
              <div className={`column is-6 ${styles.shortBio}`}>
                <h1 className="title has-text-weight-semibold">{shortBio.heading}</h1>
                <p className="subtitle">{shortBio.body}</p>
                <div>
                  <a className="btn" href={resumePath} download>Resume</a>
                </div>
              </div>
            </div>
            <div className={`column is-12 mb-6 ${styles.whatSection}`} id="portfolio">
              <h3 className="has-text-weight-semibold is-size-2">
                {whatImDoingNow.heading}
              </h3>
              <p className="mb-6">{whatImDoingNow.description}</p>
              <Features gridItems={whatImDoingNow.logos} />
            </div>
            <div className="column is-12 mb-6">
              <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                {portfolio.heading}
              </h3>
              <p className="mb-6 has-text-centered">{portfolio.description}</p>
              <PortfolioGrid gridItems={portfolio.pieces} className="mb-6"/>
            </div>
            <div className="column is-12 has-text-centered mb-6">
              <h3 className="has-text-weight-semibold is-size-2">
                {experience.heading}
              </h3>
              <p className="mb-5">{experience.description}</p>
              <Experience gridItems={experience.pastExperience} className="mb-6"/>
            </div>
            <div className={`column is-12 ${styles.latestBlogs}`}>
              <h3 className="has-text-weight-semibold is-size-2">
                Latest Blogs
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
  );
};

IndexPageTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroHeading: PropTypes.string,
  heroSubheading: PropTypes.string,
  shortBio: PropTypes.object,
  whatImDoingNow: PropTypes.shape({
    logos: PropTypes.array,
  }),
  portfolio: PropTypes.shape({
    pieces: PropTypes.array,
  }),
  experience: PropTypes.shape({
    companyLogos: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroImage={frontmatter.heroImage}
        heroHeading={frontmatter.heroHeading}
        heroSubheading={frontmatter.heroSubheading}
        shortBio={frontmatter.shortBio}
        whatImDoingNow={frontmatter.whatImDoingNow}
        portfolio={frontmatter.portfolio}
        experience={frontmatter.experience}
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
        heroImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heroHeading
        heroSubheading
        shortBio {
          picture {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          heading
          body
          resume {
            relativePath
          }
        }
        whatImDoingNow {
          heading
          description
          logos {
            logoImage {
              relativePath
            }
            logoName
          }
        }
        portfolio {
          heading
          description
          pieces {
            title
            videoLink
            description
          }
        }
        experience {
          heading
          description
          pastExperience {
            companyLogo {
              relativePath
            }
            companyName
            jobTitle
            jobDescription
          }
        }
      }
    }
  }
`;
