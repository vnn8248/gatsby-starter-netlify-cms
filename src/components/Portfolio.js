import * as React from "react";
import PropTypes from "prop-types";

import * as styles from '../../static/css/styles.module.css';

const PortfolioGrid = ({ gridItems }) => (
  <div className={`columns is-mobile is-multiline is-flex is-justify-content-space-between ${styles.portfolioGrid}`}>
    {gridItems.map((item) => (
      <div key={item.title} className="column">
        <iframe src={item.videoLink} title={item.title} className={styles.greenShade}></iframe>
        <p className={`has-text-centered ${styles.portfolioTitle}`}>{item.title}</p>
        <p className={styles.portfolioDescription}>{item.description}</p>
      </div>
    ))}
  </div>
);

PortfolioGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      videoLink: PropTypes.string,
    })
  ),
};

export default PortfolioGrid;
