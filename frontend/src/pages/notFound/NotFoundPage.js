import React, { Component } from 'react'
import '../../resources/css/layout.css'
import '../../resources/css/amp.css'
import '../../resources/css/amp-form.css'
import '../../resources/css/amp-lightbox-gallery.css'
import '../../resources/css/amp-loader.css'
import '../../resources/css/amp-sidebar.css'
import '../../resources/css/grid.css'
import '../../resources/js/amp'
import '../../resources/js/amp-form'
import '../../resources/js/amp-autolightbox'
import '../../resources/js/amp-lightbox-gallery'
import '../../resources/js/amp-mustache'
import '../../resources/js/amp-sidebar'

import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/footer/Footer'

class NotFoundPage extends Component {
  render () {
    return (
      <div className="d-flex flex-column height-100vh">
        <NavigationBar/>
        <section className="form1 cid-rBWI8btg16 flex-grow-1" id="form1-23">
          <div className="container align-center mbr-white">
            <div className="title-wrap">
              <h1 className="mbr-section-title mbr-fonts-style display-1"><strong>404</strong></h1>
              <h3 className="mbr-section-subtitle mbr-fonts-style display-2">Cette page n'existe pas !</h3>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default NotFoundPage
