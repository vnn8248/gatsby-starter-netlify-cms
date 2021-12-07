import * as React from "react";
import PropTypes from "prop-types";

import * as styles from '../../static/css/styles.module.css';

const PortfolioGrid = ({ gridItems }) => (
  <div className={`columns is-mobile is-multiline is-flex is-justify-content-space-between`}>
    {gridItems.map((item) => (
      <div key={item.title} className={`card column ${styles.portfolioCards}`}>
        <div className="card-image">
          <figure className="image">
            <iframe src={item.videoLink} title={item.title} className=""></iframe>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            {/* <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div> */}
            <div className="media-content">
              <p className="title is-4">{item.title}</p>
            </div>
          </div>

          <div className="content has-text-left">
            {item.description}
          </div>
        </div>
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

// {/* <div key={item.title} className="column">
// <iframe src={item.videoLink} title={item.title} className={styles.greenShade}></iframe>
// <p className={`has-text-centered ${styles.portfolioTitle}`}>{item.title}</p>
// <p className={styles.portfolioDescription}>{item.description}</p>
// </div>

// <div key={item.title} class="card">
//   <div class="card-image">
//     <figure class="image is-4by3">
//       <iframe src={item.videoLink} title={item.title} className={styles.greenShade}></iframe>
//     </figure>
//   </div>
//   <div class="card-content">
//     <div class="media">
//       {/* <div class="media-left">
//         <figure class="image is-48x48">
//           <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
//         </figure>
//       </div> */}
//       <div class="media-content">
//         <p class="title is-4">{item.title}</p>
//       </div>
//     </div>

//     <div class="content">
//       {item.description}
//     </div>
//   </div>
// </div> */}