import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import * as styles from "../../static/css/styles.module.css";

const FeatureGrid = ({ gridItems }) => (
  <div className={`columns is-multiline ${styles.features}`}>
    {gridItems.map((item) => (
      <div key={item.logoName} className="column is-flex is-flex-direction-column is-justify-content-space-between mb-6">
        <div>
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <div>
          <p className="has-text-centered">{item.logoName}</p>
        </div>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      logoImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      logoName: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
