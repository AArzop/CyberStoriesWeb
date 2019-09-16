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

import './css/article.css'
import NavigationBar from '../../components/NavigationBar'

class ArticlePage extends Component {
  render () {
    return (
      <div>
        <NavigationBar/>
        <section className="title1 cid-rBWQMJGsZd" id="title1-2o">
          {/*Block parameters controls (Blue "Gear" panel) */}
          <div className="mbr-overlay"/>
          <div className="container">
            <div className="title">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Article Title</h3>
              <h4 className="mbr-text mbr-fonts-style mbr-pt-2 display-5">Enter your article subtitle here</h4>
            </div>
          </div>
        </section>
        <section className="mbr-section content1 cid-rBWRpQITKd" id="content1-2s">
          <div className="container">
            <div className="title mbr-pb-4">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Article catchy title</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-lg-12">
                <p className="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br/>
                  <br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  <br/></p>
              </div>
            </div>
          </div>
        </section>
        <section className="content2 cid-rBWQSKBBIB" id="content2-2p">
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
        <section className="content5 cid-rBWScz9Mx7" id="content5-2t">
          <div className="container">
            <div className="inner-container align-center">
              <div className="icon align-left">
                <div className="iconfont-wrapper">
                  <span className="amp-iconfont fa-quote-left fa"><svg width="100%" height="100%"
                                                                       viewBox="0 0 1792 1792"
                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                       fill="currentColor"><path
                    d="M832 960v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136zm896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136v-704q0-104 40.5-198.5t109.5-163.5 163.5-109.5 198.5-40.5h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136z"/></svg></span>
                </div>
              </div>
              <p className="mbr-text mbr-black mbr-fonts-style mbr-py-2 display-5">8b Web Builder is one of the easiest
                website development tools available today. It also gives you the freedom to develop as many websites as
                you like given the fact that it is a desktop app.</p>
              <div className="icon align-right">
                <div className="iconfont-wrapper">
                  <span className="amp-iconfont fa-quote-right fa"><svg width="100%" height="100%"
                                                                        viewBox="0 0 1792 1792"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="currentColor"><path
                    d="M832 320v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136zm896 0v704q0 104-40.5 198.5t-109.5 163.5-163.5 109.5-198.5 40.5h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136v-384q0-80 56-136t136-56h384q80 0 136 56t56 136z"/></svg></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content2 cid-rBWQUGjDv7" id="content2-2q">
          <div className="container">
            <div className="mbr-row mbr-row-reverse">
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
        <section className="mbr-section content1 cid-rBWSi1x5l3" id="content1-2u">
          <div className="container">
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-lg-12">
                <p className="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br/>
                  <br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  <br/></p>
              </div>
            </div>
          </div>
        </section>
        <section className="footer1 cid-r9i2fKQSx1" id="footer1-2n">
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

export default ArticlePage
