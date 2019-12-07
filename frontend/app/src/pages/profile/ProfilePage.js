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
import Footer from '../../components/footer/Footer'

import './css/profile.css'
import NavigationBar from '../../components/NavigationBar'
import { Link } from 'react-router-dom'
import { post } from 'fetch-factorized'
import { LOGOUT } from '../../actions/authentication'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  authentication: state.authentication
})

class ProfilePage extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    post('/rest-auth/logout/', '').then(() => {
      this.props.dispatch({ type: LOGOUT })
    })
  }

  render () {
    return (
      <div className="d-flex flex-column height-100vh">
        <NavigationBar/>
        <section className="form1 cid-rBWI8btg16 flex-grow-1">
          <div className="container align-center">
            <div className="title-wrap">
              <h1 className="mbr-section-title mbr-fonts-style display-2">
                <strong>Profil</strong>
              </h1>
            </div>
            <h3 className="mbr-fonts-style display-5">{this.props.authentication.username}</h3>
            <h3 className="mbr-fonts-style display-5">{this.props.authentication.email}</h3>
            <p className="mt-5"><Link className="btn btn-md btn-primary display-7" to={'/change-password'}>
              Changer de mot de passe</Link></p>
            <p><Link className="btn btn-md btn-primary display-7" to={'/'} onClick={this.handleClick}>Déconnexion</Link>
            </p>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ProfilePage)
