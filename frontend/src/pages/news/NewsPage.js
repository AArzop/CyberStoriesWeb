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

import './css/news.css'
import NavigationBar from '../../components/NavigationBar'
import { Link } from 'react-router-dom'

class NewsPage extends Component {
  render () {
    return (
      <div>
        <NavigationBar/>
        <section className="title1 cid-rBWFdKsqJW" id="title1-1t">
          <div className="mbr-overlay"/>
          <div className="container">
            <div className="title">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">News</h3>
              <h4 className="mbr-text mbr-fonts-style mbr-pt-2 display-5">Les nouveautés de Cyberstories</h4>
            </div>
          </div>
        </section>
        <section className="features3 cid-rBWG1pUHrl" id="features3-1x">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Les dernières nouveautés</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background1.jpg"
                             layout="responsive" width={348} height={232} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title One</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">Card Subtitle</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/article">Read More</Link></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background5.jpg"
                             layout="responsive" width={348} height={232} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title Two</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">Card Subtitle</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/article">Read More</Link></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 last-child">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background6.jpg"
                             layout="responsive" width="348.5446009389671" height={232} alt=""
                             class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title Three</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">Card Subtitle</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features3 cid-rBWGc62ltN" id="features3-1y">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Le meilleur de la semaine</h3>
            </div>
            <div className="mbr-row mbr-jc-c mbr-column">
              <div className="card mbr-col-sm-12 mbr-px-4 last-child">
                <div className="card-wrapper mbr-flex">
                  <div className="card-img mbr-flex mbr-col-md-12 mbr-col-lg-6">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background1.jpg"
                             layout="responsive" width={567} height={378} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pb-3 mbr-pt-3 mbr-px-4">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title One</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">Card Subtitle</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/article">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features3 cid-rBWGee8DaZ" id="features3-1z">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Nos conseils en cybersécurité</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background1.jpg"
                             layout="responsive" width={348} height={232} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3 align-center">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title One</h3>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/article">Read More</Link></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background5.jpg"
                             layout="responsive" width={348} height={232} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3 align-center">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title Two</h3>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/article">Read More</Link></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 last-child">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background6.jpg"
                             layout="responsive" width="348.5446009389671" height={232} alt=""
                             class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3 align-center">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Card Title Three</h3>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><Link className="btn btn-primary display-7"
                                                                          to="/article">Read More</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info2 cid-rBWHbrAjlB" id="info2-20">
          {/*Block parameters controls (Blue "Gear" panel) */}
          <div className="container">
            <div className="mbr-row mbr-jc-c">
              <div className="title-wrap mbr-col-lg-8 mbr-col-md-8 mbr-col-sm-12 mbr-flex mbr-column mbr-jc-c">
                <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Recevez notre newsletter</h3>
                <p className="mbr-text mbr-fonts-style mbr-pt-4 display-7">Recevez les dernières informations, les
                  dernières nouveautés et des informations sur des réductions possibles.</p>
              </div>
              <div className="form-wrap mbr-col-lg-4 mbr-col-md-4 mbr-col-sm-12 mbr-flex mbr-column mbr-jc-c"
                   data-form-type="formoid">
                <div className="form-block" data-form-type="formoid">
                  <form className="mbr-form mbr-jc-c mbr-flex mbr-m-auto mbr-column" method="post" target="_top"
                        action-xhr="https://formoid.net/api/amp-form/push" data-form-title="8b Form"><input
                    type="hidden" name="siteid" data-form-siteid="true" defaultValue={59453}/><input type="hidden"
                                                                                                     name="email"
                                                                                                     data-form-email="true"
                                                                                                     defaultValue="qUDd97HlUG918RMaKmUBJ73PgHNm9aKw4lEhB4HS94hzRfvv21r4YlaS/WbWjePaqIhIk61Wcz9cOO0ar04jb6EoZt8H7w8QazKPfDNu5RC318meIH77S5knlSwqoiUT"/>
                    <div className="mbr-overlay"/>
                    <div submit-success>
                      <template data-form-alert type="amp-mustache"/>
                    </div>
                    <div submit-error>
                      <template data-form-alert type="amp-mustache"/>
                    </div>
                    <div className="fieldset">
                      <div className="field">
                        <input type="email" name="form[data][0][1]" data-form-field="E-mail" placeholder="E-mail"
                               required id="form[data][0][1]-info2-20"/>
                      </div>
                      <div className="mbr-section-btn align-center">
                        <button type="submit" className="btn btn-primary btn-form display-7">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer1 cid-r9i2fKQSx1" id="footer1-1r">
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

export default NewsPage
