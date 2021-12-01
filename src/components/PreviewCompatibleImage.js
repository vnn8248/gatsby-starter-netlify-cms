import * as React from "react";
import PropTypes from "prop-types";
// import { StaticImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { image, text } = imageInfo;

  const src = `/img/${image.relativePath}`;

  const imageStyles = {
    display: "block",
    margin: "auto"
  }

  return <img 
            width="75" 
            height="75" 
            src={src} 
            alt={text} 
            style={imageStyles}
          />

  // if (!!image && !!image.publicUrl) {
  //   return (
  //     <GatsbyImage
  //       image={image.publicUrl}
  //       style={imageStyle}
  //       alt={text}
  //     />
  //   );
  // } else if (!!image.publicUrl) {
  //   return (
  //     <GatsbyImage
  //       image={image.publicUrl}
  //       style={imageStyle}
  //       alt={text}
  //     />
  //   );
  //   // for Netlify CMS 
  // } else if (image.publicUrl) {
  //   return <img style={imageStyle} src={image.publicUrl} alt={text} />;
  // } else {
  //   return null
  // }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    publicUrl: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
