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

import './css/register.css'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/footer/Footer'
import RegisterForm from '../../forms/RegisterForm'
import { Link } from 'react-router-dom'
import FacebookLoginButton from '../../components/socialLoginButtons/FacebookLoginButton'

class RegisterPage extends Component {
  render () {
    return (
      <div className="d-flex flex-column height-100vh">
        <NavigationBar/>
        <section className="form1 cid-rBWI8btg16 flex-grow-1" id="form1-23">
          <div className="container align-center mbr-white">
            <div className="title-wrap">
              <h1 className="mbr-section-title mbr-fonts-style display-2"><strong>Créer un compte</strong></h1>
            </div>
            <div className="mbr-row mbr-jc-c mb-4">
              <div data-form-type="formoid" className="mbr-col-lg-7">
                <FacebookLoginButton/>
              </div>
            </div>
            <h6 className="mbr-section-subtitle mbr-fonts-style display-5 mb-4">Ou</h6>
            <div className="mbr-row mbr-jc-c">
              <div data-form-type="formoid" className="mbr-col-lg-7">
                <RegisterForm/>
              </div>
            </div>
            <p className="card-text mbr-fonts-style mbr-pt-2 display-7">
              Déjà un compte ? <span> </span>
              <Link to="/login"
                className="text-primary">
                Se connecter
              </Link>
            </p>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default RegisterPage
