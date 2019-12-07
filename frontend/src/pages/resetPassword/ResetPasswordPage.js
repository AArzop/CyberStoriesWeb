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
import PasswordResetForm from '../../forms/PasswordResetForm'

class ResetPasswordPage extends Component {
  render () {
    return (
      <div className="d-flex flex-column height-100vh">
        <NavigationBar/>
        <section className="form1 cid-rBWI8btg16 flex-grow-1" id="form1-23">
          <div className="container align-center mbr-white">
            <div className="title-wrap">
              <h1 className="mbr-section-title mbr-fonts-style display-2"><strong>Mot-de-passe oublié</strong></h1>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div data-form-type="formoid" className="mbr-col-lg-7">
                <PasswordResetForm/>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default ResetPasswordPage
