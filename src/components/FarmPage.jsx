import React from 'react'
import { Link } from 'react-router-dom'

export default function FarmPage({ title, bgImage, mainImg, iconImg, description, chooseTitle, chooseImg, chooseImgHeight, products, activeSlug }) {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><span>/</span></li>
              <li><Link to="/services">Service</Link></li>
              <li><span>/</span></li>
              <li>{title}</li>
            </ul>
            <h2>{title}</h2>
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
                  <h3 className="sidebar__title">All Farms</h3>
                  <ul className="sidebar__category-list list-unstyled service-details__sidebar-service-list">
                    <li className={activeSlug === 'coconut-farm' ? 'active' : ''}><Link to="/our-farms">Coconut Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'papaya-farm' ? 'active' : ''}><Link to="/papaya-farm">Papaya Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'mango-farm' ? 'active' : ''}><Link to="/mango-farm">Mango Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'guava-farm' ? 'active' : ''}><Link to="/guava-farm">Guava Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'rambutan-farm' ? 'active' : ''}><Link to="/rambutan-farm">Passion Fruit Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'tapioca-farm' ? 'active' : ''}><Link to="/tapioca-farm">Cassava Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'banana-farm' ? 'active' : ''}><Link to="/banana-farm">Banana Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'fish-farm' ? 'active' : ''}><Link to="/fish-farm">Fish Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'goat-farm' ? 'active' : ''}><Link to="/goat-farm">Goat Farm<span>&#8594;</span></Link></li>
                    <li className={activeSlug === 'poultry-farm' ? 'active' : ''}><Link to="/poultry-farm">Poultry Farm<span>&#8594;</span></Link></li>
                  </ul>
                </div>
                <div className="services-details__need-help">
                  <div className="services-details__need-help-bg" style={{ backgroundImage: 'url(/assets/images/services/services-details-need-help-bg.jpg)' }}></div>
                  <h3 className="services-details__need-help-title">Nourish Your Body, <br /> Embrace the <br /> Natural Goodness!</h3>
                  <div className="services-details__need-help-icon"><span>📞</span></div>
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
                    <img src={mainImg} alt="" />
                    {iconImg && (
                      <div className="services-details__img-icon">
                        <span><img src={iconImg} alt="" /></span>
                      </div>
                    )}
                  </div>
                  <h3 className="services-details__title">{title}</h3>
                  <p className="mb-4" style={{ textAlign: 'justify' }}>{description}</p>
                </div>
                <div className="service-details__choose">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="service-details__choose-img">
                        <img src={chooseImg} height={chooseImgHeight || undefined} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="service-details__choose-content">
                        <h4 className="service-details__choose-title">{chooseTitle}</h4><br />
                        <ul className="list-unstyled service-details__choose-points">
                          {products && products.map((product, idx) => (
                            <li key={idx}>
                              <div className="icon"><i>&#10003;</i></div>
                              <div className="text"><p>{product}</p></div>
                            </li>
                          ))}
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
