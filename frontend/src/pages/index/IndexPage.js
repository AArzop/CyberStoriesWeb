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

import './css/index.css'
import chairs from './images/chairs.png'
import city from './images/city.png'
import conf from './images/conf.png'
import entrance from './images/entrance.png'
import mails from './images/mails.png'
import office2 from './images/office2.png'
import office3 from './images/office3.png'
import web from './images/web.png'

class IndexPage extends Component {
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
        <section className="menu1 menu horizontal-menu cid-r9hYnpdbBm" id="menu1-1">
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
        <section className="header1 cid-r9hYfl02Zb" id="header1-0">
          <div className="mbr-overlay"/>
          <div className="container">
            <div className="mbr-row align-center">
              <div className="title-block mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-12">
                <h1 className="mbr-section-title mbr-fonts-style mbr-bold display-1">CYBERSTORIES</h1>
                <h2 className="mbr-section-subtitle mbr-fonts-style mbr-pt-3 display-2">Le jeu pour la cybersécurité en
                  réalité virtuelle</h2>
                <div className="mbr-section-btn mbr-pt-4"><a className="btn btn-white display-7" href="page6.html">COMMENCER
                  MAINTENANT</a></div>
              </div>
            </div>
          </div>
        </section>
        <section className="features1 cid-rBSSloQhbt" id="features1-12">
          <div className="container">
            <div className="title-wrap mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Avec</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 align-center md-pb">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-cube fa"><svg width="100%" height="100%" viewBox="0 0 1792 1792"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     fill="currentColor"><path
                        d="M896 1629l640-349v-636l-640 233v752zm-64-865l698-254-698-254-698 254zm832-252v768q0 35-18 65t-49 47l-704 384q-28 16-61 16t-61-16l-704-384q-31-17-49-47t-18-65v-768q0-40 23-73t61-47l704-256q22-8 44-8t44 8l704 256q38 14 61 47t23 73z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Réalité virtuelle</h3>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the icon to select another icon in the icons
                      list.</p>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 align-center md-pb">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-key fa"><svg width="100%" height="100%" viewBox="0 0 1792 1792"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"><path
                        d="M832 512q0-80-56-136t-136-56-136 56-56 136q0 42 19 83-41-19-83-19-80 0-136 56t-56 136 56 136 136 56 136-56 56-136q0-42-19-83 41 19 83 19 80 0 136-56t56-136zm851 704q0 17-49 66t-66 49q-9 0-28.5-16t-36.5-33-38.5-40-24.5-26l-96 96 220 220q28 28 28 68 0 42-39 81t-81 39q-40 0-68-28l-671-671q-176 131-365 131-163 0-265.5-102.5t-102.5-265.5q0-160 95-313t248-248 313-95q163 0 265.5 102.5t102.5 265.5q0 189-131 365l355 355 96-96q-3-3-26-24.5t-40-38.5-33-36.5-16-28.5q0-17 49-66t66-49q13 0 23 10 6 6 46 44.5t82 79.5 86.5 86 73 78 28.5 41z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Scénarios véridiques</h3>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the icon to select another icon in the icons
                      list.</p>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 align-center last-child">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-user fa"><svg width="100%" height="100%" viewBox="0 0 1792 1792"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     fill="currentColor"><path
                        d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-5">Maître du jeu</h3>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the icon to select another icon in the icons
                      list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features2 cid-r9mOgmhl8s" id="features2-k">
          <div className="container">
            <div className="mbr-row">
              <div className="card mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3 align-center md-pb">
                <div className="card-wrapper mbr-flex mbr-column mbr-p-4">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="image-text mbr-fonts-style display-2">5/5</div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-7">GAME INFORMER</h3>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3 align-center md-pb">
                <div className="card-wrapper mbr-flex mbr-column mbr-p-4">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="image-text mbr-fonts-style display-2">10/10</div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-7">GAMESPOT</h3>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3 align-center">
                <div className="card-wrapper mbr-flex mbr-column mbr-p-4">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="image-text mbr-fonts-style display-2">4.5/5</div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-7">PS UNIVERSE</h3>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3 align-center last-child">
                <div className="card-wrapper mbr-flex mbr-column mbr-p-4">
                  <div className="card-img align-center mbr-pb-3">
                    <div className="image-text mbr-fonts-style display-2">9/10</div>
                  </div>
                  <div className="card-box">
                    <h3 className="card-title mbr-bold mbr-fonts-style display-7">IGN</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="amp-lightbox-gallery cid-ruGvBbiI7x" id="item-wizard-gallery-y">
          <div className="container-fluid">
            <div className="title mbr-pb-4">
              <h3 className="mbr-section-title mbr-light mbr-fonts-style display-2">GALLERIE</h3>
            </div>
            <div className="mbr-row">
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={chairs}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={city}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={conf}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={entrance}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           className="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={mails}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={office2}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={office3}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
              <div className="item gallery-image mbr-col-md-6 mbr-col-sm-12 mbr-col-lg-3">
                <div className="item-wrapper">
                  <amp-img lightbox
                           src={web}
                           layout="responsive" width="320.27027027027026" height={180} alt=""
                           class="placeholder-loader">
                    <div placeholder className="placeholder">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                        <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                strokeDashoffset={230} cx={150} cy={150} r={145}/>
                        <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                cx={150} cy={150} r={135}/>
                      </svg>
                    </div>
                    <div className="icon-wrap iconfont-wrapper">
                <span className="amp-iconfont mbri-search"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                                width="100%" height="100%" viewBox="0 0 32 32"
                                                                fill="currentColor">
                    <path
                      d="M10.875 17.534l-10.024 10.002c-1.192 1.19-1.033 2.844-0.138 3.745s2.55 1.062 3.747-0.135l9.987-9.987c0.654-0.628-0.336-1.575-0.943-0.943l-9.987 9.987c-0.772 0.772-1.425 0.575-1.859 0.138s-0.627-1.101 0.135-1.862l10.024-10.002c0.56-0.56-0.336-1.549-0.943-0.943zM20.266 2.742c-1.925 0.259-3.756 1.212-5.083 2.807-0.569 0.684 0.435 1.564 1.026 0.854 2.219-2.667 6.095-3.188 8.94-1.203 0.729 0.509 1.492-0.585 0.763-1.094-1.702-1.187-3.721-1.624-5.646-1.365zM21.333 0c-5.883 0-10.667 4.783-10.667 10.667s4.784 10.667 10.667 10.667c5.883 0 10.667-4.783 10.667-10.667s-4.784-10.667-10.667-10.667zM21.333 1.333c5.163 0 9.333 4.171 9.333 9.333s-4.171 9.333-9.333 9.333c-5.163 0-9.333-4.171-9.333-9.333s4.171-9.333 9.333-9.333z"/>
                  </svg></span>
                    </div>
                  </amp-img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content5 cid-rBT4uphjJD" id="content5-1c">
          <div className="container">
            <div className="inner-container align-center">
              <hr className="line"/>
              <p className="mbr-text mbr-black mbr-fonts-style mbr-py-4 display-2">Cyberstories permettra à votre
                entreprise de s'entraîner dans les meilleures conditions pour adopter des réflexes en terme de
                cybersécurité au travail.</p>
              <hr className="line"/>
            </div>
          </div>
        </section>
        <section className="features3 cid-r9mAPRRSAP" id="features3-f">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-fonts-style display-2">Dernières News</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/4-696x392.jpg"
                             layout="responsive" width={348} height={196} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3 mbr-pb-3 mbr-px-4">
                    <h3 className="card-title mbr-fonts-style display-5">BATTLEFIELD V</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style display-4">PC</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><a className="btn btn-primary-outline display-4"
                                                                          href="page5.html">En savoir plus</a></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/3-696x392.jpg"
                             layout="responsive" width={348} height={196} alt="" class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3 mbr-pb-3 mbr-px-4">
                    <h3 className="card-title mbr-fonts-style display-5">ANTHEM</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style display-4">PC</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><a className="btn btn-primary-outline display-4"
                                                                          href="page5.html">En savoir plus</a></div>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 last-child">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/1-696x391.jpg"
                             layout="responsive" width="347.10997442455243" height={195} alt=""
                             class="placeholder-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                  <div className="card-box mbr-m-auto mbr-pt-3 mbr-pb-3 mbr-px-4">
                    <h3 className="card-title mbr-fonts-style display-5">FALLOUT 76</h3>
                    <h4 className="card-subtitle mbr-pt-3 mbr-fonts-style display-4">Play Station</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">Click on the text in the block to select
                      it and enter the text you want to show. Click on the image to set another one.</p>
                    <div className="card-btn mbr-section-btn mbr-pt-2"><a className="btn btn-primary-outline display-4"
                                                                          href="page5.html">En savoir plus</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info2 cid-rBWPT9Dh6i" id="info2-2l">
          {/*Block parameters controls (Blue "Gear" panel) */}
          <div className="container">
            <div className="mbr-row mbr-jc-c">
              <div className="title-wrap mbr-col-lg-8 mbr-col-md-8 mbr-col-sm-12 mbr-flex mbr-column mbr-jc-c">
                <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Recevez notre newsletter</h3>
                <p className="mbr-text mbr-fonts-style mbr-pt-4 display-7">Restez informés des dernières nouveautés,
                  réductions et bons plans.</p>
              </div>
              <div className="form-wrap mbr-col-lg-4 mbr-col-md-4 mbr-col-sm-12 mbr-flex mbr-column mbr-jc-c"
                   data-form-type="formoid">
                <div className="form-block" data-form-type="formoid">
                  <form className="mbr-form mbr-jc-c mbr-flex mbr-m-auto mbr-column" method="post" target="_top"
                        action-xhr="https://formoid.net/api/amp-form/push" data-form-title="8b Form"><input
                    type="hidden" name="siteid" data-form-siteid="true" defaultValue={59453}/><input type="hidden"
                                                                                                     name="email"
                                                                                                     data-form-email="true"
                                                                                                     defaultValue="6wKSpTh6nldoV4t53cdDzM1SBbjNF/tleRsJ3YBZfCeWSqdladRU84gvOWZAIoHSfD7TdxnxJ54ImUZXkIkPq9EkxH4OWE93SivgVOHyB9PZmptGFGvyiEHzZO2ZqLZE"/>
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
                               required id="form[data][0][1]-info2-2l"/>
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
        <section className="content3 cid-rBT49bMa4l" id="content3-19">
          <div className="container">
            <div className="mbr-row mbr-row-reverse">
              <div className="video-block mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-8">
                <amp-youtube width={16} height={9} layout="responsive" data-videoid="SGOJzzqkga0"
                             class="placeholder-loader"/>
              </div>
              <div className="text-wrap mbr-col-sm-12 mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-4">
                <p className="mbr-text mbr-fonts-style display-7">
                  Open parameters of this block to add the link to your Youtube video. Make your own website in a few
                  clicks! 8b Web Builder helps you cut down development time by providing you with a flexible website
                  editor with a drag and drop interface. 8b Web Builder creates responsive, retina and mobile friendly
                  websites in a few clicks. 8b Web Builder is one of the easiest website development tools available
                  today.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="social social-follow1 cid-r9tlH8cCF8" id="social-follow1-w">
          <div className="container-fluid">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-fonts-style display-2">Réseaux sociaux</h3>
            </div>
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
            </a></div>
          </div>
        </section>
        <section className="contacts7 map cid-rBT39XZk1K" id="contacts7-17">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Nous contacter</h3>
              <h4 className="mbr-section-subtitle mbr-fonts-style mbr-pt-2 display-5">Ouvert du Lundi au Vendredi
                9h00-18h00</h4>
            </div>
            <div className="mbr-row mbr-px-2 mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 align-center md-pb">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img align-center">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-map-marker fa"><svg width="100%" height="100%"
                                                                           viewBox="0 0 1792 1792"
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           fill="currentColor"><path
                        d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box mbr-pt-3">
                    <h4 className="card-title mbr-bold mbr-fonts-style display-5">Adresse</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">6834 Hollywood Blvd - Los Angeles CA</p>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 align-center md-pb">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img align-center">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-phone fa"><svg width="100%" height="100%" viewBox="0 0 1792 1792"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="currentColor"><path
                        d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box mbr-pt-3">
                    <h4 className="card-title mbr-bold mbr-fonts-style display-5">Téléphone</h4>
                    <p className="card-text mbr-fonts-style mbr-pt-2 display-7">+1234 56 789</p>
                  </div>
                </div>
              </div>
              <div className="card mbr-col-sm-12 mbr-col-md-8 mbr-col-lg-4 align-center last-child">
                <div className="card-wrapper mbr-flex mbr-column">
                  <div className="card-img align-center">
                    <div className="iconfont-wrapper">
                      <span className="amp-iconfont fa-envelope-o fa"><svg width="100%" height="100%"
                                                                           viewBox="0 0 1792 1792"
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           fill="currentColor"><path
                        d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"/></svg></span>
                    </div>
                  </div>
                  <div className="card-box mbr-pt-3">
                    <h4 className="card-title mbr-bold mbr-fonts-style display-5">E-mail</h4>
                    <p className="card-text mbr-pt-3 mbr-fonts-style display-7">info@site.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gaming-sponsors cid-r9nTWG8lah" id="gaming-sponsors">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-fonts-style display-2">Nos sponsors</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="cardspon mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-2 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/1.png"
                             layout="responsive" width="100.8" height={84} alt="" class="mobirise-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                </div>
              </div>
              <div className="cardspon mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-2 md-pb">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/2.png"
                             layout="responsive" width="100.8" height={84} alt="" class="mobirise-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                </div>
              </div>
              <div className="cardspon mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-2">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/3.png"
                             layout="responsive" width="100.8" height={84} alt="" class="mobirise-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                </div>
              </div>
              <div className="cardspon mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-2">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/4.png"
                             layout="responsive" width="100.8" height={84} alt="" class="mobirise-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                </div>
              </div>
              <div className="cardspon mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-2 last-child">
                <div className="card-wrapper mbr-column">
                  <div className="card-img mbr-flex">
                    <amp-img src="https://app.8b.io/app/themes/webamp/projects/gaming/assets/images/5.png"
                             layout="responsive" width="100.8" height={84} alt="" class="mobirise-loader">
                      <div placeholder className="placeholder">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                          <circle className="big" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={230}
                                  strokeDashoffset={230} cx={150} cy={150} r={145}/>
                          <circle className="small" fill="none" stroke="#c2e0e0" strokeWidth={3} strokeDasharray={212}
                                  cx={150} cy={150} r={135}/>
                        </svg>
                      </div>
                      <a href="index.html"/>
                    </amp-img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer1 cid-r9i2fKQSx1" id="footer1-b">
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

export default IndexPage
