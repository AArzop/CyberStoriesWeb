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

import './css/download.css'
import NavigationBar from '../../components/NavigationBar'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

class DownloadPage extends Component {
  render () {
    return (
      <div className="d-flex flex-column height-100vh">
        <NavigationBar/>
        <section className="title1 cid-rBXIsLKtrc" id="title1-2y">
          {/* Block parameters controls (Blue "Gear" panel) */}
          <div className="mbr-overlay"/>
          <div className="container">
            <div className="title">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2"><p>Téléchargement</p></h3>
              <h4 className="mbr-text mbr-fonts-style mbr-pt-2 display-5">Obtenez Cyberstories</h4>
            </div>
          </div>
        </section>
        <section className="features1 cid-rBXJqH5zku" id="features1-2z">
          <div className="container">
            <div className="title-wrap mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Télécharger Cyberstories</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img mbr-pb-3">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-windows fa"><svg width="100%" height="100%"
                                                                        viewBox="0 0 1792 1792"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="currentColor"><path
                        d="M746 1006v651l-682-94v-557h682zm0-743v659h-682v-565zm982 743v786l-907-125v-661h907zm0-878v794h-907v-669z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Windows</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">64 bits</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the icon to select another icon in the icons
                      list.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><a className="btn btn-lg btn-primary display-7"
                                                                          href="/">Télécharger</a></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img mbr-pb-3">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-apple fa"><svg width="100%" height="100%" viewBox="0 0 1792 1792"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="currentColor"><path
                        d="M1585 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zm-376-1173q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Mac OS</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">64 bits</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the icon to select another icon in the icons
                      list.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><a className="btn btn-lg btn-primary display-7"
                                                                          href="/">Télécharger</a></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 last-child">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img mbr-pb-3">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-linux fa"><svg width="100%" height="100%" viewBox="0 0 1792 1792"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="currentColor"><path
                        d="M791 411q-11 1-15.5 10.5t-8.5 9.5q-5 1-5-5 0-12 19-15h10zm87 14q-4 1-11.5-6.5t-17.5-4.5q24-11 32 2 3 6-3 9zm-351 427q-4-1-6 3t-4.5 12.5-5.5 13.5-10 13q-10 11-1 12 4 1 12.5-7t12.5-18q1-3 2-7t2-6 1.5-4.5.5-4v-3l-1-2.5-3-2zm855 359q0-18-55-42 4-15 7.5-27.5t5-26 3-21.5.5-22.5-1-19.5-3.5-22-4-20.5-5-25-5.5-26.5q-10-48-47-103t-72-75q24 20 57 83 87 162 54 278-11 40-50 42-31 4-38.5-18.5t-8-83.5-11.5-107q-9-39-19.5-69t-19.5-45.5-15.5-24.5-13-15-7.5-7q-14-62-31-103t-29.5-56-23.5-33-15-40q-4-21 6-53.5t4.5-49.5-44.5-25q-15-3-44.5-18t-35.5-16q-8-1-11-26t8-51 36-27q37-3 51 30t4 58q-11 19-2 26.5t30 .5q13-4 13-36v-37q-5-30-13.5-50t-21-30.5-23.5-15-27-7.5q-107 8-89 134 0 15-1 15-9-9-29.5-10.5t-33 .5-15.5-5q1-57-16-90t-45-34q-27-1-41.5 27.5t-16.5 59.5q-1 15 3.5 37t13 37.5 15.5 13.5q10-3 16-14 4-9-7-8-7 0-15.5-14.5t-9.5-33.5q-1-22 9-37t34-14q17 0 27 21t9.5 39-1.5 22q-22 15-31 29-8 12-27.5 23.5t-20.5 12.5q-13 14-15.5 27t7.5 18q14 8 25 19.5t16 19 18.5 13 35.5 6.5q47 2 102-15 2-1 23-7t34.5-10.5 29.5-13 21-17.5q9-14 20-8 5 3 6.5 8.5t-3 12-16.5 9.5q-20 6-56.5 21.5t-45.5 19.5q-44 19-70 23-25 5-79-2-10-2-9 2t17 19q25 23 67 22 17-1 36-7t36-14 33.5-17.5 30-17 24.5-12 17.5-2.5 8.5 11q0 2-1 4.5t-4 5-6 4.5-8.5 5-9 4.5-10 5-9.5 4.5q-28 14-67.5 44t-66.5 43-49 1q-21-11-63-73-22-31-25-22-1 3-1 10 0 25-15 56.5t-29.5 55.5-21 58 11.5 63q-23 6-62.5 90t-47.5 141q-2 18-1.5 69t-5.5 59q-8 24-29 3-32-31-36-94-2-28 4-56 4-19-1-18-2 1-4 5-36 65 10 166 5 12 25 28t24 20q20 23 104 90.5t93 76.5q16 15 17.5 38t-14 43-45.5 23q8 15 29 44.5t28 54 7 70.5q46-24 7-92-4-8-10.5-16t-9.5-12-2-6q3-5 13-9.5t20 2.5q46 52 166 36 133-15 177-87 23-38 34-30 12 6 10 52-1 25-23 92-9 23-6 37.5t24 15.5q3-19 14.5-77t13.5-90q2-21-6.5-73.5t-7.5-97 23-70.5q15-18 51-18 1-37 34.5-53t72.5-10.5 60 22.5zm-628-827q3-17-2.5-30t-11.5-15q-9-2-9 7 2 5 5 6 10 0 7 15-3 20 8 20 3 0 3-3zm419 197q-2-8-6.5-11.5t-13-5-14.5-5.5q-5-3-9.5-8t-7-8-5.5-6.5-4-4-4 1.5q-14 16 7 43.5t39 31.5q9 1 14.5-8t3.5-20zm-178-213q0-11-5-19.5t-11-12.5-9-3q-6 0-8 2t0 4 5 3q14 4 18 31 0 3 8-2 2-2 2-3zm54-233q0-2-2.5-5t-9-7-9.5-6q-15-15-24-15-9 1-11.5 7.5t-1 13-.5 12.5q-1 4-6 10.5t-6 9 3 8.5q4 3 8 0t11-9 15-9q1-1 9-1t15-2 9-7zm565 1341q20 12 31 24.5t12 24-2.5 22.5-15.5 22-23.5 19.5-30 18.5-31.5 16.5-32 15.5-27 13q-38 19-85.5 56t-75.5 64q-17 16-68 19.5t-89-14.5q-18-9-29.5-23.5t-16.5-25.5-22-19.5-47-9.5q-44-1-130-1-19 0-57 1.5t-58 2.5q-44 1-79.5 15t-53.5 30-43.5 28.5-53.5 11.5q-29-1-111-31t-146-43q-19-4-51-9.5t-50-9-39.5-9.5-33.5-14.5-17-19.5q-10-23 7-66.5t18-54.5q1-16-4-40t-10-42.5-4.5-36.5 10.5-27q14-12 57-14t60-12q30-18 42-35t12-51q21 73-32 106-32 20-83 15-34-3-43 10-13 15 5 57 2 6 8 18t8.5 18 4.5 17 1 22q0 15-17 49t-14 48q3 17 37 26 20 6 84.5 18.5t99.5 20.5q24 6 74 22t82.5 23 55.5 4q43-6 64.5-28t23-48-7.5-58.5-19-52-20-36.5q-121-190-169-242-68-74-113-40-11 9-15-15-3-16-2-38 1-29 10-52t24-47 22-42q8-21 26.5-72t29.5-78 30-61 39-54q110-143 124-195-12-112-16-310-2-90 24-151.5t106-104.5q39-21 104-21 53-1 106 13.5t89 41.5q57 42 91.5 121.5t29.5 147.5q-5 95 30 214 34 113 133 218 55 59 99.5 163t59.5 191q8 49 5 84.5t-12 55.5-20 22q-10 2-23.5 19t-27 35.5-40.5 33.5-61 14q-18-1-31.5-5t-22.5-13.5-13.5-15.5-11.5-20.5-9-19.5q-22-37-41-30t-28 49 7 97q20 70 1 195-10 65 18 100.5t73 33 85-35.5q59-49 89.5-66.5t103.5-42.5q53-18 77-36.5t18.5-34.5-25-28.5-51.5-23.5q-33-11-49.5-48t-15-72.5 15.5-47.5q1 31 8 56.5t14.5 40.5 20.5 28.5 21 19 21.5 13 16.5 9.5z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Linux</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style mbr-bold display-7">64 bits</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the icon to select another icon in the icons
                      list.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><a className="btn btn-lg btn-primary display-7"
                                                                          href="/">Télécharger</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mbr-section content6 cid-rBXLztkCon" id="content6-30">
          <div className="container">
            <div className="title mbr-col-sm-12 mbr-col-md-12 mbr-pb-4 align-center mbr-col-lg-8 mbr-m-auto">
              <h3 className="mbr-section-title mbr-fonts-style display-2">Instructions d'installation</h3>
              <h4 className="mbr-section-subtitle mbr-fonts-style mbr-pt-2 display-5">Enter your subtitle here</h4>
            </div>
            <div
              className="mbr-text counter-container mbr-fonts-style mbr-col-sm-12 mbr-col-md-12 display-7 mbr-pt-4 stylizedCounters mbr-col-lg-8 mbr-m-auto">
              <ol>
                <li><strong>MOBILE FRIENDLY</strong> - no special actions required, all sites you make with 8b Web
                  Builder are mobile-friendly. You don't have to create a special mobile version of your site, it will
                  adapt automagically. <a href="/" className="text-primary">Try it now!</a></li>
                <li><strong>EASY AND SIMPLE</strong> - cut down the development time with drag-and-drop website builder.
                  Drop the blocks into the page, edit content inline and publish - no technical skills required. <a
                    href="/" className="text-primary">Try it now!</a></li>
                <li><strong>UNIQUE STYLES</strong> - choose from the large selection of latest pre-made blocks -
                  full-screen intro, content slider, responsive image gallery with lightbox, parallax scrolling,
                  hamburger menu, sticky header and more. <a href="/" className="text-primary">Try it
                    now!</a></li>
              </ol>
            </div>
          </div>
        </section>
        <section className="info1 cid-rBXPA0mMn9" id="info1-33">
          {/* Block parameters controls (Blue "Gear" panel) */}
          <div className="container">
            <div className="mbr-row mbr-jc-c">
              <div className="title-wrap mbr-col-lg-8 mbr-col-md-8 mbr-col-sm-12 mbr-flex mbr-column mbr-jc-c">
                <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Pas de casque de réalité virtuelle
                  ?<br/>Louez-en un !</h3>
                <p className="mbr-text mbr-fonts-style mbr-pt-4 display-7">8b Web Builder creates responsive, retina and
                  mobile friendly websites in a few clicks. 8b Web Builder is one of the easiest website development
                  tools available today.</p>
              </div>
              <div className="btn-wrap mbr-col-lg-4 mbr-col-md-4 mbr-col-sm-12 mbr-flex mbr-column">
                <div className="mbr-section-btn mbr-m-auto"><Link className="btn btn-md btn-primary display-7"
                                                                  to="/rent">Louer un casque</Link></div>
              </div>
            </div>
          </div>
        </section>
        <section className="content2 cid-rBXQ7SF363" id="content2-35">
          <div className="container">
            <div className="mbr-row">
              <div className="image mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-6">
                <amp-img src="https://r.8b.io/59453/images/55e3d54b4f55af14ea89857dc22e3-h_k0h3zsuf.png"
                         layout="responsive" width="505.5" height={337} alt="" class="placeholder-loader">
                  <div placeholder className="placeholder">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                      <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                              strokeDashoffset={230} cx={150} cy={150} r={145}/>
                      <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                              cx={150} cy={150} r={135}/>
                    </svg>
                  </div>
                  <Link to="/rent"/>
                </amp-img>
              </div>
              <div className="text-wrap mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-6">
                <p className="mbr-text mbr-fonts-style display-7">Click on the image to set another one. Make your own
                  website in a few clicks! 8b Web Builder helps you cut down development time by providing you with a
                  flexible website editor with a drag and drop interface. 8b Web Builder creates responsive, retina and
                  mobile friendly websites in a few clicks. 8b Web Builder is one of the easiest website development
                  tools available today.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="info1 cid-rBZ2IcMnDi" id="info1-3c">
          {/* Block parameters controls (Blue "Gear" panel) */}
          <div className="container">
            <div className="mbr-row mbr-jc-c">
              <div className="title-wrap mbr-col-lg-8 mbr-col-md-8 mbr-col-sm-12 mbr-flex mbr-column mbr-jc-c">
                <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Essayez Cyberstories dans votre
                  navigateur !</h3>
                <p className="mbr-text mbr-fonts-style mbr-pt-4 display-7">8b Web Builder creates responsive, retina and
                  mobile friendly websites in a few clicks. 8b Web Builder is one of the easiest website development
                  tools available today.</p>
              </div>
              <div className="btn-wrap mbr-col-lg-4 mbr-col-md-4 mbr-col-sm-12 mbr-flex mbr-column">
                <div className="mbr-section-btn mbr-m-auto"><Link className="btn btn-md btn-primary display-7"
                                                                  to="/try">Essayer cyberstories</Link></div>
              </div>
            </div>
          </div>
        </section>
        <section className="content2 cid-rBZ3zNmdl9 flex-grow-1" id="content2-3d">
          <div className="container">
            <div className="mbr-row">
              <div className="image mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-6">
                <amp-img src="https://app.8b.io/app/themes/webamp/components/_images/background2.jpg"
                         layout="responsive" width="506.2952646239554" height={284} alt=""
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
              <div className="text-wrap mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-6">
                <p className="mbr-text mbr-fonts-style display-7">Click on the image to set another one. Make your own
                  website in a few clicks! 8b Web Builder helps you cut down development time by providing you with a
                  flexible website editor with a drag and drop interface. 8b Web Builder creates responsive, retina and
                  mobile friendly websites in a few clicks. 8b Web Builder is one of the easiest website development
                  tools available today.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>

    )
  }
}

export default DownloadPage
