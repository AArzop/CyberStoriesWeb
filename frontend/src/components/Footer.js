import React, { Component } from 'react'
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

class Footer extends Component {
  render () {
    return (
      <section className="footer1 cid-r9i2fKQSx1" id="footer1-22">
        <div className="footer-container container">
          <div className="mbr-row link-items mbr-jc-c mbr-fonts-style display-7">
            <p className="mbr-text fLink mbr-px-1 mbr-white">
              Commandes
            </p>
            <p className="mbr-text fLink mbr-px-1 mbr-white">
              <a href="index.html#features3-2" className="text-white">
                TheSpotLight
              </a>
            </p>
            <p className="mbr-text fLink mbr-px-1 mbr-white">
              <a href="index.html#video1-7"
                 className="text-white">
                YouTube
              </a>
            </p>
          </div>
          <div className="copyright mbr-px-2 mbr-flex mbr-jc-c">
            <p className="mbr-text mbr-fonts-style mbr-white align-center display-7">© Copyright <span>2019</span>
              <span>Cyberstories</span> - Tous droits réservés</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer
