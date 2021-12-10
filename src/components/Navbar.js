import React from "react";
// import PropTypes from "prop-types";
import { Link } from "gatsby";
import linkedin from "../img/social/linkedin.svg";
import logo from "../img/jess-schultz-logo.svg";

import * as styles from '../../static/css/styles.module.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    // const resume = this.data.markdownRemark.frontmatter.shortBio.resume;
    // const resumePath = `/img/${resume.relativePath}`;
    return (
      <nav
        className={`navbar is-transparent ${styles.bbShade}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className={`navbar-brand ${styles.navbarBrand}`}>
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Jess Schultz Logo" className={styles.jsLogo} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About Me
              </Link>
              <Link className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/jessicaschultz328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={linkedin} alt="Jess Schultz LinkedIn" />
                </span>
              </a>
              {/* <a className="btn" href={resumePath} download>Resume</a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

// Navbar.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default Navbar;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         shortBio {
//           resume {
//             relativePath
//           }
//         }
//       }
//     }
//   }
// `;