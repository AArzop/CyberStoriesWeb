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

import './css/register.css'
import NavigationBar from '../../components/NavigationBar'

class RegisterPage extends Component {
  render () {
    return (
      <div>
        <NavigationBar/>
        <section className="form1 cid-rBWI8btg16" id="form1-23">
          <div className="container align-center mbr-white">
            <div className="title-wrap">
              <h1 className="mbr-section-title mbr-fonts-style display-2"><strong>Créer un compte</strong></h1>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div data-form-type="formoid" className="mbr-col-lg-7">
                <form className="mbr-form" method="post" target="_top"
                      action-xhr="https://formoid.net/api/amp-form/push" data-form-title="8b Form"><input type="hidden"
                                                                                                          name="siteid"
                                                                                                          data-form-siteid="true"
                                                                                                          defaultValue={59453}/><input
                  type="hidden" name="email" data-form-email="true"
                  defaultValue="ZXuclvOpwgnw9rfj9otdkpvl0Lv/nBImbIUpfwqbe2Eva+Kjm0PJ3Ra6pghuD73sD9a0rFslOKBeXK9uJwj9OozOxLtNPfPfr0bcFJM2ZyipOF8fDVYQStPPsecZe+y6"/>
                  <div className="bg-for-datepicker"/>
                  <div submit-success>
                    <template data-form-alert type="amp-mustache"/>
                  </div>
                  <div submit-error>
                    <template data-form-alert type="amp-mustache"/>
                  </div>
                  <div className="fieldset">
                    <div className="field" data-for="form[data][0][1]">
                      <input type="hidden" name="form[data][0][0]" defaultValue="Name" id="form[data][0][0]-form1-23"
                             data-form-field/>
                      <input type="text" name="form[data][0][1]" data-form-field="Name" placeholder="Name" required
                             id="form[data][0][1]-form1-23"/>
                    </div>
                    <div className="field" data-for="form[data][1][1]">
                      <input type="hidden" name="form[data][1][0]" defaultValue="Email" id="form[data][1][0]-form1-23"
                             data-form-field/>
                      <input type="email" name="form[data][1][1]" data-form-field="Email" placeholder="Email" required
                             id="form[data][1][1]-form1-23"/>
                    </div>
                    <div className="field" data-for="form[data][2][1]">
                      <div className="date-picker-wrap">
                        <input type="hidden" name="form[data][2][0]" defaultValue="Date" id="form[data][2][0]-form1-23"
                               data-form-field/>
                        <amp-date-picker id="simple-date-picker" type="single" mode="overlay" layout="container"
                                         on="select:AMP.setState({'form[data][2][1]': event.date, dateType1: event.id})"
                                         input-selector=".input-date54" class="example-picker space-between"
                                         open-after-select format="YYYY-MM-DD" locale="en">
                          <input className="input-date54" data-form-field="Date" placeholder="Date" autoComplete="off"
                                 name="form[data][2][1]" required id="form[data][2][1]-form1-23"/>
                        </amp-date-picker>
                      </div>
                    </div>
                    <div className="field" data-for="form[data][3][1]">
                      <input type="hidden" name="form[data][3][0]" defaultValue="Time" id="form[data][3][0]-form1-23"
                             data-form-field/>
                      <input type="time" className="timepicker" name="form[data][3][1]" data-form-field="Time"
                             placeholder="Time" required defaultValue="12:00" min="09:00" max="18:00" step={60}
                             id="form[data][3][1]-form1-23"/>
                    </div>
                    <div className="field" data-for="form[data][4][1]">
                      <input type="hidden" name="form[data][4][0]" defaultValue="Service" id="form[data][4][0]-form1-23"
                             data-form-field/>
                      <input type="text" name="form[data][4][1]" data-form-field="Service" placeholder="Name of Service"
                             required id="form[data][4][1]-form1-23"/>
                    </div>
                    <div className="field" data-for="form[data][5][1]">
                      <input type="hidden" name="form[data][5][0]" defaultValue="Phone" id="form[data][5][0]-form1-23"
                             data-form-field/>
                      <input type="tel" name="form[data][5][1]" data-form-field="Phone" placeholder="Phone" required
                             id="form[data][5][1]-form1-23"/>
                    </div>
                    <div className="align-center">
                      <button type="submit" className="btn btn-primary btn-form display-4">
                        Valider
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="footer1 cid-r9i2fKQSx1" id="footer1-22">
          <div className="footer-container container">
            <div className="mbr-row link-items mbr-jc-c mbr-fonts-style display-7">
              <p className="mbr-text fLink mbr-px-1 mbr-white">Commandes</p><p
              className="mbr-text fLink mbr-px-1 mbr-white"><a href="index.html#features3-2"
                                                               className="text-white">TheSpotLight</a></p><p
              className="mbr-text fLink mbr-px-1 mbr-white"><a href="index.html#video1-7"
                                                               className="text-white">YouTube</a></p></div>
            <div className="copyright mbr-px-2 mbr-flex mbr-jc-c">
              <p className="mbr-text mbr-fonts-style mbr-white align-center display-7">© Copyright <span>2019</span>
                <span>Cyberstories</span> - Tous droits réservés</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default RegisterPage
