import * as React from "react";
import PropTypes from "prop-types";
// import { StaticImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { logoImage, logoName } = imageInfo;

  if (logoImage !== undefined) {
    const src = `/img/${logoImage.relativePath}`;
  
    const imageStyles = {
      display: "block",
      margin: "auto"
    }
  
  
      return <img 
                width="75" 
                height="75" 
                src={src} 
                alt={logoName} 
                style={imageStyles}
              />
  } else {
    return <div></div>
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    logoImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    logoName: PropTypes.string,
  }).isRequired,
};

export default PreviewCompatibleImage;
