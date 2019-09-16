import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../resources/css/amp.css'
import '../resources/css/amp-form.css'
import '../resources/css/amp-lightbox-gallery.css'
import '../resources/css/amp-loader.css'
import '../resources/css/amp-sidebar.css'
import '../resources/css/grid.css'
import '../resources/js/amp'
import '../resources/js/amp-form'
import '../resources/js/amp-autolightbox'
import '../resources/js/amp-lightbox-gallery'
import '../resources/js/amp-mustache'
import '../resources/js/amp-sidebar'

class NavigationBar extends Component {
  render () {
    return (
      <React.Fragment>
        <amp-sidebar id="sidebar" class="cid-r9hYnpdbBm" layout="nodisplay" side="right">
          <div className="builder-sidebar" id="builder-sidebar">
            <button on="tap:sidebar.close" className="close-sidebar">
              <span/>
              <span/>
            </button>
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li className="nav-item">
                <Link className="nav-link mbr-bold link text-black display-7" to="/try">Essayer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mbr-bold link text-black display-7" to="/download">Télécharger</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mbr-bold link text-black display-7" to="/news">News</Link>
              </li>
            </ul>
            <div className="navbar-buttons mbr-section-btn"><Link
              className="btn btn-md mbr-bold btn-primary-outline display-7" to="/register">créer un compte</Link></div>
          </div>
        </amp-sidebar>
        <section className="menu1 menu horizontal-menu cid-r9hYnpdbBm" id="menu1-1">
          <nav className="navbar navbar-dropdown navbar-expand-lg navbar-fixed-top">
            <div className="menu-container container">
              <div className="navbar-brand">
                <span className="navbar-caption-wrap">
                  <Link className="navbar-caption mbr-bold text-black display-5"
                        to="/">
                    Cyberstories
                  </Link>
                </span>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                  <li className="nav-item">
                    <Link className="nav-link mbr-bold link text-black display-7" to="/try">Essayer</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mbr-bold link text-black display-7" to="/download">Télécharger</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mbr-bold link text-black display-7" to="/news">News</Link>
                  </li>
                </ul>
                <div className="navbar-buttons mbr-section-btn">
                  <Link
                    className="btn btn-md mbr-bold btn-primary-outline display-7"
                    to="/register">
                    créer un compte
                  </Link>
                </div>
              </div>
              <button on="tap:sidebar.toggle" className="ampstart-btn hamburger">
                <span/>
                <span/>
                <span/>
                <span/>
              </button>
            </div>
          </nav>
        </section>
      </React.Fragment>
    )
  }
}

export default NavigationBar
