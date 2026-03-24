import React from 'react'
import { Link } from 'react-router-dom'

export default function Project02() {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/c11.webp' }}></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><span>/</span></li>
              <li><Link to="/services">service</Link></li>
              <li><span>/</span></li>
              <li>Coconut Farm</li>
            </ul>
            <h2>Coconut Farm</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*Services Details Start*/}
      <div className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="services-details__left">
                <div className="sidebar__single sidebar__category">
                  <h3 className="sidebar__title">Our Farms</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    <li><Link to="/our-farms">Coconut Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/papaya-farm">Pappaya Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/mango-farm">Mango Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/guava-farm">Guava Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/rambutan-farm">Passion Fruit Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/tapioca-farm">Cassava Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/banana-farm">Banana Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/fish-farm">Fish Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/goat-farm">Goat Farm<span>&#8594;</span></Link></li>
                    <li><Link to="/poultry-farm">Poultry Farm<span>&#8594;</span></Link></li>
                  </ul>
                </div>
                <div className="services-details__need-help">
                  <div className="services-details__need-help-bg" style={{ backgroundImage: 'url(/assets/images/services/services-details-need-help-bg.jpg)' }}></div>
                  <h3 className="services-details__need-help-title">Nourish Your Body, <br /> Embrace the <br /> Natural Goodness!</h3>
                  <div className="services-details__need-help-icon">
                    <span>📞</span>
                  </div>
                  <div className="services-details__need-help-contact">
                    <p>Talk To Futz Agro Farms</p>
                    <a href="tel:+256700123456">+256 700 123 456</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="services-details__right">
                <div className="services-details__content-box">
                  <div className="services-details__img">
                    <img src="/assets/images/services/c20.jpg" alt="" />
                    <div className="services-details__img-icon">
                      <span><img src="/assets/images/icon/coconut.png" alt="" /></span>
                    </div>
                  </div>
                  <h3 className="services-details__title">Coconut Farm</h3>
                  <p className="mb-4" style={{ textAlign: 'justify' }}>
                    Coconut palms thrive along Uganda's lakeshores and lowland areas. Our coconut estate produces fresh coconuts, coconut oil, and coconut milk for local consumption and export. Coconut farming supports rural livelihoods and contributes to Uganda's growing agro-processing industry. Our estate in Wakiso District benefits from fertile soils and a warm, humid climate that yields abundant harvests throughout the year.
                  </p>
                </div>
                <div className="service-details__choose">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__choose-img">
                        <img src="/assets/images/services/c21.webp" alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__choose-content">
                        <h4 className="service-details__choose-title">Our Farm Coconut</h4><br />
                        <ul className="list-unstyled service-details__choose-points">
                          <li>
                            <div className="icon"><i>&#10003;</i></div>
                            <div className="text"><p>Tender Coconut</p></div>
                          </li>
                          <li>
                            <div className="icon"><i>&#10003;</i></div>
                            <div className="text"><p>Eathomozhy Coconut</p></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Services Details End*/}
    </>
  )
}
