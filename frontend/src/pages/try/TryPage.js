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

import './css/try.css'

class TryPage extends Component {
  render () {
    return (
      <div>
        <amp-sidebar id="sidebar" class="cid-r9hYnpdbBm" layout="nodisplay" side="right">
          <div className="builder-sidebar" id="builder-sidebar">
            <button on="tap:sidebar.close" className="close-sidebar">
              <span/>
              <span/>
            </button>
            {/* NAVBAR ITEMS */}
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li className="nav-item">
                <a className="nav-link mbr-bold link text-black display-7" href="page4.html">Essayer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mbr-bold link text-black display-7" href="page6.html">Télécharger</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mbr-bold link text-black display-7" href="page2.html">News</a>
              </li>
            </ul>
            {/* NAVBAR ITEMS END */}
            {/* SOCIAL ICON */}
            {/* SOCIAL ICON END */}
            {/* SHOW BUTTON */}
            <div className="navbar-buttons mbr-section-btn"><a
              className="btn btn-md mbr-bold btn-primary-outline display-7" href="page3.html">créer un compte</a></div>
            {/* SHOW BUTTON END */}
          </div>
        </amp-sidebar>
        <section className="menu1 menu horizontal-menu cid-r9hYnpdbBm" id="menu1-25">
          {/* <div class="menu-wrapper"> */}
          <nav className="navbar navbar-dropdown navbar-expand-lg navbar-fixed-top">
            <div className="menu-container container">
              {/* SHOW LOGO */}
              <div className="navbar-brand">
                <span className="navbar-caption-wrap"><a className="navbar-caption mbr-bold text-black display-5"
                                                         href="index.html">Cyberstories</a></span>
              </div>
              {/* SHOW LOGO END */}
              {/* COLLAPSED MENU */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* NAVBAR ITEMS */}
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                  <li className="nav-item">
                    <a className="nav-link mbr-bold link text-black display-7" href="page4.html">Essayer</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mbr-bold link text-black display-7" href="page6.html">Télécharger</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mbr-bold link text-black display-7" href="page2.html">News</a>
                  </li>
                </ul>
                {/* NAVBAR ITEMS END */}
                {/* SOCIAL ICON */}
                {/* SOCIAL ICON END */}
                {/* SHOW BUTTON */}
                <div className="navbar-buttons mbr-section-btn"><a
                  className="btn btn-md mbr-bold btn-primary-outline display-7" href="page3.html">créer un compte</a>
                </div>
                {/* SHOW BUTTON END */}
              </div>
              {/* COLLAPSED MENU END */}
              <button on="tap:sidebar.toggle" className="ampstart-btn hamburger">
                <span/>
                <span/>
                <span/>
                <span/>
              </button>
            </div>
          </nav>
          {/* AMP plug */}
          {/* </div> */}
        </section>
        <section className="image1 cid-rBWJDId1kU" id="image1-27">
          <div className="container">
            <div className="image-block mbr-m-auto align-center mbr-col-md-9">
              <amp-img class="placeholder-loader"
                       src="https://app.8b.io/app/themes/webamp/components/_images/background5.jpg" layout="responsive"
                       width="1108.5" height={739} alt="">
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
            <div className="mbr-figure-caption mbr-pt-2 mbr-px-4">
              <p className="mbr-text mbr-black align-center mbr-fonts-style display-7">Essayez Cyberstories en ligne</p>
            </div>
          </div>
        </section>
        <section className="social social-follow1 cid-rBWVTmUIpM" id="social-follow1-2v">
          <div className="container-fluid">
            <div className="icons-list mbr-flex flex-wrap mbr-jc-c">
              <a href="https://www.linkedin.com/company/8b/" target="_blank" className="iconfont-wrapper">
                <span className="amp-iconfont animation-normal fa-linkedin-square fa"><svg width="100%" height="100%"
                                                                                           viewBox="0 0 1792 1792"
                                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                                           fill="currentColor"><path
                  d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg></span>
              </a><a href="https://twitter.com/8bsite" target="_blank" className="iconfont-wrapper">
              <span className="amp-iconfont animation-normal fa-twitter-square fa"><svg width="100%" height="100%"
                                                                                        viewBox="0 0 1792 1792"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="currentColor"><path
                d="M1408 610q-56 25-121 34 68-40 93-117-65 38-134 51-61-66-153-66-87 0-148.5 61.5t-61.5 148.5q0 29 5 48-129-7-242-65t-192-155q-29 50-29 106 0 114 91 175-47-1-100-26v2q0 75 50 133.5t123 72.5q-29 8-51 8-13 0-39-4 21 63 74.5 104t121.5 42q-116 90-261 90-26 0-50-3 148 94 322 94 112 0 210-35.5t168-95 120.5-137 75-162 24.5-168.5q0-18-1-27 63-45 105-109zm256-194v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg></span>
            </a><a href="https://www.facebook.com/8bsite/" target="_blank" className="iconfont-wrapper">
              <span className="amp-iconfont animation-normal fa-facebook-square fa"><svg width="100%" height="100%"
                                                                                         viewBox="0 0 1792 1792"
                                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                                         fill="currentColor"><path
                d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136 0-217.5 80t-81.5 226v171h-200v232h200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"/></svg></span>
            </a><a href="https://www.youtube.com/channel/UCIl8JHjLsqZNOdgBOYC_MRQ" target="_blank"
                   className="iconfont-wrapper">
              <span className="amp-iconfont animation-normal fa-youtube-square fa"><svg width="100%" height="100%"
                                                                                        viewBox="0 0 1792 1792"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="currentColor"><path
                d="M1047 1303v-157q0-50-29-50-17 0-33 16v224q16 16 33 16 29 0 29-49zm184-122h66v-34q0-51-33-51t-33 51v34zm-571-266v70h-80v423h-74v-423h-78v-70h232zm201 126v367h-67v-40q-39 45-76 45-33 0-42-28-6-17-6-54v-290h66v270q0 24 1 26 1 15 15 15 20 0 42-31v-280h67zm252 111v146q0 52-7 73-12 42-53 42-35 0-68-41v36h-67v-493h67v161q32-40 68-40 41 0 53 42 7 21 7 74zm251 129v9q0 29-2 43-3 22-15 40-27 40-80 40-52 0-81-38-21-27-21-86v-129q0-59 20-86 29-38 80-38t78 38q21 29 21 86v76h-133v65q0 51 34 51 24 0 30-26 0-1 .5-7t.5-16.5v-21.5h68zm-451-824v156q0 51-32 51t-32-51v-156q0-52 32-52t32 52zm533 713q0-177-19-260-10-44-43-73.5t-76-34.5q-136-15-412-15-275 0-411 15-44 5-76.5 34.5t-42.5 73.5q-20 87-20 260 0 176 20 260 10 43 42.5 73t75.5 35q137 15 412 15t412-15q43-5 75.5-35t42.5-73q20-84 20-260zm-755-651l90-296h-75l-51 195-53-195h-78q7 23 23 69l24 69q35 103 46 158v201h74v-201zm289 81v-130q0-58-21-87-29-38-78-38-51 0-78 38-21 29-21 87v130q0 58 21 87 27 38 78 38 49 0 78-38 21-27 21-87zm181 120h67v-370h-67v283q-22 31-42 31-15 0-16-16-1-2-1-26v-272h-67v293q0 37 6 55 11 27 43 27 36 0 77-45v40zm503-304v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg></span>
            </a><a href="https://www.instagram.com/8bsite/" target="_blank" className="iconfont-wrapper">
              <span className="amp-iconfont animation-normal fa-instagram fa"><svg width="100%" height="100%"
                                                                                   viewBox="0 0 1792 1792"
                                                                                   xmlns="http://www.w3.org/2000/svg"
                                                                                   fill="currentColor"><path
                d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/></svg></span>
            </a><a href="https://www.behance.net/8bsite" target="_blank" className="iconfont-wrapper">
              <span className="amp-iconfont animation-normal fa-behance-square fa"><svg width="100%" height="100%"
                                                                                        viewBox="0 0 1792 1792"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="currentColor"><path
                d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm-749 367h-371v787h382q117 0 197-57.5t80-170.5q0-158-143-200 107-52 107-164 0-57-19.5-96.5t-56.5-60.5-79-29.5-97-8.5zm-22 318h-176v-184h163q119 0 119 90 0 94-106 94zm9 335h-185v-217h189q124 0 124 113 0 104-128 104zm650 32q-68 0-104-38t-36-107h411q1-10 1-30 0-132-74.5-220.5t-203.5-88.5q-128 0-210 86t-82 216q0 135 79 217t213 82q205 0 267-191h-138q-11 34-47.5 54t-75.5 20zm-10-366q113 0 124 122h-254q4-56 39-89t91-33zm-162-266h319v77h-319v-77z"/></svg></span>
            </a></div>
          </div>
        </section>
        <section className="footer1 cid-r9i2fKQSx1" id="footer1-26">
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

export default TryPage
