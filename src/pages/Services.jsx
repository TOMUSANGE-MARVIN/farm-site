import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/v1.jpg)' }}></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><span>/</span></li>
              <li><Link to="/services">Futz Organic</Link></li>
            </ul>
            <h2>Purely Organic</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*About One Start*/}
      <section className="about-one">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/h1.webp" height="350" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title mt-3">Coconut</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Coconut palms thrive along Uganda's lakeshores and lowland areas. Our coconut estate produces fresh coconuts, coconut oil, and coconut milk for local consumption and export. Coconut farming supports rural livelihoods and contributes to Uganda's growing agro-processing industry.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Papaya</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Papaya grows abundantly in Uganda's equatorial climate. Our papaya fields produce large, sweet fruits that are harvested fresh and supplied to supermarkets, hotels, and export markets. Papaya farming in Uganda offers excellent returns due to its fast growth cycle and high demand.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/p2.webp" alt="" />
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/m2.webp" height="370" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title mt-3">Mango</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Uganda's tropical climate and fertile soils make it ideal for mango cultivation. Our mango orchards in Wakiso District produce premium quality fruits that are sweet, juicy, and packed with nutrients. We cultivate year-round using sustainable farming practices that protect our environment while delivering the best yields.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Guava</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Guava thrives in Uganda's warm climate and is grown across the country. Our guava farm produces large, sweet fruits rich in Vitamin C. We supply fresh guava to local markets, juice processors, and exporters, making the most of Uganda's year-round growing season.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/g1.jpg" height="350" alt="" />
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/r2.jpg" height="370" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title mt-3">Passion Fruit</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Uganda is one of Africa's top passion fruit producers and exporters. Our passion fruit vines grow vigorously in the highlands of Wakiso, producing bright, aromatic fruits rich in juice and flavour. We supply both fresh passion fruit and juice concentrate to local and international buyers.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Cassava</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Cassava is Uganda's most important food security crop, grown in nearly every region of the country. Our cassava farm produces high-yielding, disease-resistant varieties that feed families and supply starch processors. We use improved varieties recommended by NARO (National Agricultural Research Organisation) Uganda.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/t2.jpg" height="350" alt="" />
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/b3.jpg" height="350" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title mt-3">Banana</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Matooke is Uganda's staple food and national dish, and our banana plantation is one of the finest in the region. We grow multiple varieties including the beloved Matooke cooking banana, sweet Bogoya, and Gonja plantain across our lush green fields. Our bananas are farmed organically and supplied fresh to local markets daily.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Fish</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Situated near the shores of Lake Victoria, our fish farm harnesses Uganda's rich freshwater resources. We practice responsible aquaculture to supply fresh, healthy fish to markets across Kampala and beyond. Our tilapia and Nile perch are raised in clean, monitored ponds for premium quality.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/f6.avif" width="373" height="350" alt="" />
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/g3.jpg" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title mt-3">Goat</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Our goat farm in the rolling hills of Wakiso District maintains a healthy herd of indigenous and improved breeds. Goat farming is a cornerstone of Ugandan agriculture, providing meat, milk, and income for rural communities. We apply modern animal husbandry to maximize productivity while ensuring animal welfare.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title">Poultry</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Poultry farming is one of Uganda's fastest growing agricultural sectors. Our farm raises both indigenous Kienyeji chickens — prized for their rich flavour — and commercial broilers and layers. We maintain strict biosecurity and vaccination programs to ensure healthy, disease-free birds for the Ugandan market.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/h7.jpg" height="350" alt="" />
              </div>
            </div>
          </div><br /><br /><br /><br />

          <div className="row" data-aos="fade-up">
            <div className="col-xl-6">
              <div className="about-one__img-one">
                <img src="/assets/images/services/v3.jpg" height="350" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <h2 className="section-title__title mt-3">Freshwater Prawn</h2>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Uganda's Lake Victoria and its surrounding river systems are home to a rich variety of freshwater prawns. Our aquaculture unit leverages these natural resources to farm freshwater prawns using sustainable methods. We supply fresh prawns to restaurants, hotels, and markets across Uganda, supporting the country's growing aquaculture industry.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/contact" className="thm-btn about-one__btn">Contact Us <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}

      {/*Cta One Start*/}
      <section className="cta-one">
        <div className="cta-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-one-bg.jpg)' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one__inner">
                <div className="cta-one__left">
                  <div className="cta-one__icon">
                    <span><img src="/assets/images/icon/agriculture1.png" alt="" /></span>
                  </div>
                  <h2 className="section-title__title" style={{ color: 'white' }}>"Fuel Your Body, <br />Savor the Organic Vitality</h2>
                </div>
                <div className="cta-one__right">
                  <Link to="/contact" className="thm-btn cta-one__btn">Talk To Us &#8594;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Cta One End*/}
    </>
  )
}
