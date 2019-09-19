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
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  authentication: state.authentication
})

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
            {this.props.authentication.authenticated ? (
              <React.Fragment>
                <div className="navbar-buttons mbr-section-btn"><Link
                  className="btn btn-md mbr-bold btn-primary-outline display-7" to="/register">console</Link>
                </div>
                <div className="navbar-buttons mbr-section-btn"><Link
                  className="btn btn-md mbr-bold btn-primary-outline display-7" to="/register">
                  <svg width="25px" height="40px" viewBox="0 0 1792 1792" fill="currentColor"
                       style={{ marginTop: -20, marginBottom: -20, marginRight: 3 }}>
                    <path
                      d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z">
                    </path>
                  </svg>
                  {this.props.authentication.username}
                </Link>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="navbar-buttons mbr-section-btn"><Link
                  className="btn btn-md mbr-bold btn-primary-outline display-7" to="/register">créer un compte</Link>
                </div>
                <div className="navbar-buttons mbr-section-btn"><Link
                  className="btn btn-md mbr-bold btn-primary-outline display-7" to="/login">connexion</Link></div>
              </React.Fragment>
            )}
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
                {
                  this.props.authentication.authenticated ? (
                    <React.Fragment>
                      <div className="navbar-buttons mbr-section-btn">
                        <Link
                          className="btn btn-md mbr-bold btn-primary-outline display-7"
                          to="/register">
                          CONSOLE
                        </Link>
                      </div>
                      <div className="navbar-buttons mbr-section-btn">
                        <Link
                          className="btn btn-md mbr-bold btn-primary-outline display-7"
                          to="/profile">
                          <svg width="25px" height="40px" viewBox="0 0 1792 1792" fill="currentColor"
                               style={{ marginTop: -20, marginBottom: -20, marginRight: 3 }}>
                            <path
                              d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z">
                            </path>
                          </svg>
                          {this.props.authentication.username}
                        </Link>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="navbar-buttons mbr-section-btn">
                        <Link
                          className="btn btn-md mbr-bold btn-primary-outline display-7"
                          to="/register">
                          créer un compte
                        </Link>
                      </div>
                      <div className="navbar-buttons mbr-section-btn">
                        <Link
                          className="btn btn-md mbr-bold btn-primary-outline display-7"
                          to="/login">
                          Connexion
                        </Link>
                      </div>
                    </React.Fragment>
                  )
                }
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

export default connect(mapStateToProps)(NavigationBar)
