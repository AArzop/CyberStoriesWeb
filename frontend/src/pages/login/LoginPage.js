import React, { Component } from 'react'
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

import './css/login.css'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import LoginForm from '../../forms/LoginForm'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  render () {
    return (
      <div>
        <NavigationBar/>
        <section className="form1 cid-rBWI8btg16" id="form1-23">
          <div className="container align-center mbr-white">
            <div className="title-wrap">
              <h1 className="mbr-section-title mbr-fonts-style display-2"><strong>Se connecter</strong></h1>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div data-form-type="formoid" className="mbr-col-lg-7">
                <LoginForm/>
              </div>
            </div>
            <p className="card-text mbr-fonts-style mbr-pt-2 display-7">
              Pas de compte ?<span> </span>
              <Link to="/register"
                    className="text-primary">
                Créer un compte
              </Link>
            </p>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default LoginPage
