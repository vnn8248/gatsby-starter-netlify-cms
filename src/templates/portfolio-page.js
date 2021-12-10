import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";


// eslint-disable-next-line
export const PortfolioPageTemplate = ({
  image,
  title,
  heading,
  description,
  portfolio
}) => {
  const heroImage = getImage(image) || image;

  return (

    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <h3>{heading}</h3>
            <p>{description}</p>
            <Portfolio gridItems={portfolio.pieces}/>
          </div>
        </div>
      </div>
    </div>

  );
};

PortfolioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  portfolio: PropTypes.object
};

const PortfolioPage = ({ data }) => {
  const { content, portfolio } = data;

  return (
    <Layout>
      <PortfolioPageTemplate
        // image={content.image}
        title={content.frontmatter.title}
        heading={content.frontmatter.heading}
        description={content.frontmatter.description}
        portfolio={portfolio.frontmatter.portfolio}
      />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PortfolioPage;

export const portfolioPageQuery = graphql`
  query {
    content: markdownRemark(frontmatter: {templateKey: {eq: "portfolio-page"}}) {
      html
      frontmatter {
        title
        heading
        description
      }
    }
    portfolio: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
        portfolio {
          pieces {
            description
            title
            videoLink
          }
        }
      }
    }
  }
`;
