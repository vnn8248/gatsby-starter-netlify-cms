import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import * as styles from "../../static/css/styles.module.css";

const FeatureGrid = ({ gridItems }) => (
  <div className={styles.spaceBetween}>
    {gridItems.map((item) => (
      <div key={item.text} className="column is-2">
        <PreviewCompatibleImage imageInfo={item} />
        <p className={styles.center}>{item.text}</p>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
