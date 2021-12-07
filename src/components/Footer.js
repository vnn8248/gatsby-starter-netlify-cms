import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/jess-schultz-logo.svg";
import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import linkedin from "../img/social/linkedin.svg"

import * as styles from '../../static/css/styles.module.css';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={`footer has-text-white-ter ${styles.darkBkgrd}`}>
        <div className={`content has-text-centered ${styles.darkBkgrd}`}>
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className={`content has-text-centered has-text-white-ter ${styles.darkBkgrd}`}>
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/jessicaschultz328/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="fas fa-lg"
                    src={linkedin}
                    alt="Jess Schultz LinkedIn"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
