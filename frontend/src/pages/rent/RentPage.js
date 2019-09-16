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

import './css/rent.css'
import NavigationBar from '../../components/NavigationBar'
import { Link } from 'react-router-dom'

class RentPage extends Component {
  render () {
    return (
      <div>
        <NavigationBar/>
        <section className="title1 cid-rBTdh5s0Xo" id="title1-1m">
          {/*Block parameters controls (Blue "Gear" panel) */}
          <div className="mbr-overlay"/>
          <div className="container">
            <div className="title">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Location de casque</h3>
            </div>
          </div>
        </section>
        <section className="mbr-section content1 cid-rBTaRS0Jfu" id="content1-1k">
          <div className="container">
            <div className="title mbr-pb-4">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Louer un casque en deux clics !</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-lg-12">
                <p className="mbr-text mbr-fonts-style display-7">Indiquez la formule que vous souhaitez pour la
                  commande de location d'un casque de réalité virtuelle.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-table1 cid-rBT6Pgb8u0" id="pricing-table1-1g">
          <div className="container">
            <div className="mbr-row mbr-jc-c">
              <div className="card card1 mbr-col-sm-12 mbr-col-md-6 md-pb mbr-col-lg-4">
                <div className="card-inner mbr-p-3">
                  <div className="card-head">
                    <h3 className="card-title mbr-black mbr-fonts-style display-5">UN MOIS</h3>
                  </div>
                  <div className="card-price-wrap">
                    <div className="card-price">
                      <span className="price-sign mbr-black mbr-fonts-style display-2">$</span>
                      <span className="price-value mbr-black mbr-fonts-style display-2">40</span>
                    </div>
                  </div>
                  <div className="items-list-wrap">
                    <ul className="items-list mbr-black">
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Livraison en 3 jours</span>
                      </li>
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Casque qualité standard</span>
                      </li>
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Support par émail</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-button mbr-section-btn"><Link to="/rent"
                                                                  className="btn btn-lg btn-primary display-7">LOUER</Link>
                  </div>
                </div>
              </div>
              <div className="card card2 mbr-col-sm-12 mbr-col-md-6 md-pb mbr-col-lg-4">
                <div className="card-inner mbr-p-3">
                  <div className="card-head">
                    <h3 className="card-title mbr-black mbr-fonts-style display-5">SIX MOIS</h3>
                  </div>
                  <div className="card-price-wrap">
                    <div className="card-price">
                      <span className="price-sign mbr-black mbr-fonts-style display-2">$</span>
                      <span className="price-value mbr-black mbr-fonts-style display-2">200</span>
                    </div>
                  </div>
                  <div className="items-list-wrap">
                    <ul className="items-list mbr-black">
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Livraison en 3 jours</span>
                      </li>
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Casque qualité standard</span>
                      </li>
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Support par téléphone</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-button mbr-section-btn"><Link to="/rent"
                                                                  className="btn btn-lg btn-primary display-7">LOUER</Link>
                  </div>
                </div>
              </div>
              <div className="card card3 mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-4 last-child">
                <div className="card-inner mbr-p-3">
                  <div className="card-head">
                    <h3 className="card-title mbr-black mbr-fonts-style display-5">UN AN</h3>
                  </div>
                  <div className="card-price-wrap">
                    <div className="card-price">
                      <span className="price-sign mbr-black mbr-fonts-style display-2">$</span>
                      <span className="price-value mbr-black mbr-fonts-style display-2">300</span>
                    </div>
                  </div>
                  <div className="items-list-wrap">
                    <ul className="items-list mbr-black">
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Livraison en 3 jours</span>
                      </li>
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Casque qualité premium</span>
                      </li>
                      <li className="list-item">
                        <div className="iconfont-wrapper">
                          <span className="item-ico amp-iconfont fa-star-o fa"><svg width="100%" height="100%"
                                                                                    viewBox="0 0 1792 1792"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="currentColor"><path
                            d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"/></svg></span>
                        </div>
                        <span className="item-text mbr-fonts-style display-7">Intervenant spécialisé</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-button mbr-section-btn"><Link to="/rent"
                                                                  className="btn btn-lg btn-primary display-7">LOUER</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mbr-section content1 cid-rBTeP99oAg" id="content1-1o">
          <div className="container">
            <div className="title mbr-pb-4">
              <h3 className="mbr-section-title mbr-fonts-style mbr-bold display-2">Conditions de ventes</h3>
            </div>
            <div className="mbr-row mbr-jc-c">
              <div className="card mbr-col-sm-12 mbr-col-lg-12">
                <p className="mbr-text mbr-fonts-style display-7">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="contacts7 map cid-rBWElaCIqv" id="contacts7-1p">
          <div className="container">
            <div className="title mbr-pb-4 align-center">
              <h3 className="mbr-section-title mbr-bold mbr-fonts-style display-2">Nous contacter</h3>
              <h4 className="mbr-section-subtitle mbr-fonts-style mbr-pt-2 display-5">Ouvert Lundi - Vendredi
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
        <section className="footer1 cid-r9i2fKQSx1" id="footer1-1f">
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

export default RentPage
