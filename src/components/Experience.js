import * as React from "react";
import PropTypes from "prop-types";

import * as styles from '../../static/css/styles.module.css'

const Experience = ({ gridItems }) => {
    return (
    <div className="columns" id="experiences">
        {gridItems.map((item) => (
            <div key={item.companyName} className="column">

                <figure className="image">
                    <img 
                        src={`/img/${item.companyLogo.relativePath}`} 
                        alt={item.companyName} 
                        className={`companyLogo ${styles.companyLogoImage}`}
                    />
                </figure>

                <div className={`modal ${styles.modalCard}`} id={item.companyName}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className={`modal-card-head ${styles.modalCardHeader}`}>
                            <div>
                                <img 
                                    src={`/img/${item.companyLogo.relativePath}`} 
                                    alt={item.companyName} 
                                    width="100px" 
                                    height="100px"
                                /> 
                            </div>
                            <div>
                                <p className="modal-card-title">{item.companyName}</p>
                                <hr />
                                <p className="has-text-weight-semibold">{item.jobTitle}</p>
                            </div>
                        </header>
                        <section className="modal-card-body">{item.jobDescription}</section>
                        <footer className="modal-card-foot">
                            <button className="button is-success close-experience">Close</button>
                        </footer>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
};

Experience.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      videoLink: PropTypes.string,
    })
  ),
};

export default Experience;
