import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/t2.webp)' }}></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><span>/</span></li>
              <li>About</li>
            </ul>
            <h2 data-aos="fade-right">About us</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*About Banner Start*/}
      <section className="w3l-banner-agency py-5" id="work">
        <div className="midd-w3 py-md-4">
          <div className="container">
            <div className="about-img-top mb-lg-5 mb-4">
              <img src="/assets/images/backgrounds/d2.jpg" data-aos="flip-left" alt="" className="img-fluid radius-image" />
            </div>
            <div className="row">
              <div className="col-lg-4 banner-content align-self">
                <h2 className="section-title__title">"Agro-Organic" <br /> Product Form</h2>
              </div>
              <div className="col-lg-8 text-left ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                  Futz Agro Farms was founded with a vision to transform agriculture in Uganda by embracing organic, sustainable, and community-centred farming practices. Located in Wakiso District along Entebbe Road, our farm spans diverse operations including fruit orchards, vegetable gardens, fish ponds, and livestock units. We are proud to contribute to Uganda's food security while protecting the environment for future generations. Our team of dedicated farmers and agronomists work tirelessly to bring the finest organic produce from our fields to your table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Banner End*/}

      {/*Provide One Start*/}
      <section className="Provide-One">
        <div className="Provide-One__wrap">
          <div className="Provide-One__left">
            <div className="Provide-One__bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/d3.webp)' }}></div>
            <div className="provide-one__sopport">
              <div className="provide-one__support-icon">
                <span><img src="/assets/images/icon/tractor.png" alt="" /></span>
              </div>
              <p className="provide-one__support-text">We're here to guide you at every stage.</p>
            </div>
          </div>
          <div className="Provide-One__right">
            <div className="provide-one__bg-shape float-bob-x">
              <img src="/assets/images/backgrounds/provide-one-shape-1.png" alt="" />
            </div>
            <div className="Provide-One__content">
              <div className="section-title text-left">
                <span className="section-title__tagline">Our Advantages</span>
                <h2 className="section-title__title">Delivering Premium-Quality Products.</h2>
                <div className="section-title__icon">
                  <img src="/assets/images/icon/section-title-icon-1.png" alt="" />
                </div>
              </div>
              <p className="mb-4" style={{ textAlign: 'justify', color: 'white' }}>At Futz Agro Farms, our key advantage lies in Uganda's naturally fertile land, abundant rainfall, and year-round growing season. We combine traditional Ugandan farming wisdom with modern agronomy to deliver premium-quality, certified organic products. Our farm-to-market approach ensures freshness, traceability, and the highest standards of food safety for every customer across Kampala and beyond.</p>
              <div className="Provide-One__progress">
                <div className="Provide-One__progress-box">
                  <div className="circle-progress" data-options='{ "value": 0.9,"thickness": 3,"emptyFill": "#36731f","lineCap": "square", "size": 108, "fill": { "color": "#ffcd1e" } }'></div>
                  <span>90%</span>
                </div>
                <div className="Provide-One__progress-content">
                  <h3>agriculture <br /> Projects</h3>
                </div>
              </div>
              <div className="Provide-One__progress">
                <div className="Provide-One__progress-box">
                  <div className="circle-progress" data-options='{ "value": 0.5,"thickness": 3,"emptyFill": "#36731f","lineCap": "square", "size": 108, "fill": { "color": "#ffcd1e" } }'></div>
                  <span>66%</span>
                </div>
                <div className="Provide-One__progress-content">
                  <h3>Quality <br /> products</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Provide One End*/}
    </>
  )
}
