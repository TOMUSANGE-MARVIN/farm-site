import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/*Main Slider Start*/}
      <section className="main-slider clearfix">
        <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {"el": "#main-slider-pagination", "type": "bullets", "clickable": true}, "navigation": {"nextEl": "#main-slider__swiper-button-next", "prevEl": "#main-slider__swiper-button-prev"}, "autoplay": {"delay": 5000}}'>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/backgrounds/b2.webp)' }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">We are Producing Natural Products</p>
                      <h2 className="main-slider__title">Farming</h2>
                      <div className="main-slider__btn-box">
                        <Link to="/about" className="thm-btn main-slider__btn">Discover More <i><span>&#8594;</span></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/backgrounds/b3.jpg)' }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">organic fish and meat farms</p>
                      <h2 className="main-slider__title">Fish and Meat</h2>
                      <div className="main-slider__btn-box">
                        <Link to="/about" className="thm-btn main-slider__btn">Discover More <i><span>&#8594;</span></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image-layer" style={{ backgroundImage: 'url(/assets/images/backgrounds/b1.jpg)' }}></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">organic fruits and vegetables</p>
                      <h2 className="main-slider__title">Agriculture</h2>
                      <div className="main-slider__btn-box">
                        <Link to="/about" className="thm-btn main-slider__btn">Discover More <i><span>&#8594;</span></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" id="main-slider-pagination"></div>
          <div className="main-slider__nav">
            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
              <i>&#8592;</i>
            </div>
            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
              <i>&#8592;</i>
            </div>
          </div>
        </div>
      </section>
      {/*Main Slider End*/}

      {/*About One Start*/}
      <section className="about-one">
        <div className="about-one-shape-1 float-bob-x">
          <img src="/assets/images/shapes/about-one-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Discover Futz Agro Farms</span>
                  <h2 className="section-title__title">Futz Agro Farms is a holistic organic farming venture in Uganda.</h2>
                  <div className="section-title__icon">
                    <img src="/assets/images/icon/section-title-icon-1.png" alt="" />
                  </div>
                </div>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Futz Agro Farms is a leading organic farming enterprise based in Wakiso District, Uganda. Nestled in the fertile heartland of East Africa, we cultivate a diverse range of fruits, vegetables, and livestock using sustainable, eco-friendly practices. Our mission is to provide fresh, healthy, and organically grown produce to families across Uganda and beyond, while supporting rural communities and protecting our natural environment.</p>
                <div className="about-one__btn-and-ceo">
                  <div className="about-one__btn-box">
                    <Link to="/about" className="thm-btn about-one__btn">About More <i><span>&#8594;</span></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="about-one__img-box wow slideInRight" data-wow-delay="50ms" data-wow-duration="1500ms">
                  <div className="about-one__img-one">
                    <img src="/assets/images/resources/about-one-img-1.jpg" style={{ height: '500px' }} alt="" />
                  </div>
                  <div className="about-one__img-two">
                    <img src="/assets/images/resources/about-one-img-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}

      {/*Services One Start*/}
      <div className="services-one__bg" style={{ backgroundImage: 'url(/assets/images/shapes/services-one-shape-1.png)' }}></div>
      <div className="container py-lg-5 py-md-3">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="about-three__left">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about-one__img-box wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-three__left-single">
                      <div className="about-three__left-img">
                        <img src="/assets/images/resources/f2.jpg" alt="" />
                      </div>
                      <div className="about-three__left-img about-three__left-img--2">
                        <img src="/assets/images/resources/f3.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="about-one__img-box wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div className="about-three__left-single">
                      <div className="about-three__left-img">
                        <img src="/assets/images/resources/f4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-three__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">What We're Doing</span>
                <h2 className="section-title__title">The Services We Deliver</h2>
                <div className="section-title__icon">
                  <img src="/assets/images/icon/section-title-icon-1.png" alt="" />
                </div>
              </div>
              <p className="mb-4" style={{ textAlign: 'justify' }}>At Futz Agro Farms we harness Uganda's rich tropical climate, fertile red soils, and abundant water resources to deliver the finest organic produce. From our lush banana plantations and mango orchards to our thriving fish ponds and poultry units, every product is raised with care and delivered fresh to your table.</p>
              <div className="row g-3" data-aos="fade-right">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Coconut Estate</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Papaya Field</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Mango Orchard</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Guava Garden</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Passion Fruit Grove</li>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Cassava Plantation</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Banana Orchard</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Fishery</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Goat Ranch</li>
                  <li><span className="fa fa-check" style={{ color: 'white' }}></span>Poultry Ranch</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Services One End*/}

      {/*Brand One Start*/}
      <section className="brand-one">
        <div className="brand-one__inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel" data-owl-options='{"margin": 0,"smartSpeed": 700,"loop":true,"autoplay": 6000,"nav":false,"dots":false,"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],"responsive":{"0":{"items":1},"600":{"items":2},"800":{"items":3},"1024":{"items": 4},"1200":{"items": 5}}}'>
                  <div className="brand-one__single"><img src="/assets/images/brand/field-covered-palm-trees-grass-sunlight-blue-sky.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/intro-1648040612.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/istockphoto-905079548-170667a.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/close-up-farm-with-goats.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/istockphoto-1065874500-612x612.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/shrimp-farming.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/Mango_crop.min.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/istockphoto-1214002954-612x612.jpg" alt="" /></div>
                  <div className="brand-one__single"><img src="/assets/images/brand/istockphoto-1163834254-612x612.jpg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Brand One End*/}

      {/*Unbeatable One Start*/}
      <section className="unbeatable-one">
        <div className="unbeatable-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{ backgroundImage: 'url(/assets/images/backgrounds/b4.webp)' }}></div>
        <div className="row">
          <div className="col-xl-1 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
            <div className="project-one__single">
              <div className="project-one__inner">
                <div className="project-one__arrow">
                  <a href="#"><i className="icon-right-arrow"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="project-one__single">
              <div className="project-one__inner">
                <center>
                  <h2 className="section-title__title" style={{ color: 'white' }}>Mission</h2>
                  <p className="mb-4" style={{ textAlign: 'justify', color: 'white' }}>Our mission is to champion sustainable agriculture in Uganda by producing premium-quality, organically grown food. We are committed to empowering local farmers, conserving the environment, and ensuring that every Ugandan family has access to safe, nutritious, and affordable food sourced directly from our farms in Wakiso District.</p>
                </center>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
            <div className="project-one__single">
              <div className="project-one__inner"></div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="project-one__single">
              <div className="project-one__inner"></div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="project-one__single">
              <div className="project-one__inner">
                <center>
                  <h2 className="section-title__title" style={{ color: 'white' }}>Vision</h2>
                  <p className="mb-4" style={{ textAlign: 'justify', color: 'white' }}>Our vision is to become East Africa's most trusted and innovative agro-organic farm, setting the standard for sustainable food production across Uganda. We aspire to expand our operations, invest in cutting-edge agricultural technology, and inspire a new generation of Ugandan farmers to embrace organic, environmentally responsible farming.</p>
                </center>
                <div className="project-one__arrow">
                  <a href="#"><i className="icon-right-arrow"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="project-one__single">
              <div className="project-one__inner">
                <div className="project-one__arrow">
                  <a href="#"><i className="icon-right-arrow"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Unbeatable One End*/}

      {/*Healthy Food One Start*/}
      <section className="healthy-food-one">
        <div className="healthy-food-one__bg float-bob-x" style={{ backgroundImage: 'url(/assets/images/shapes/healthy-food-one-shape-1.png)' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="healthy-food-one__left">
                <div className="healthy-food-one__img">
                  <img src="/assets/images/resources/g1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="healthy-food-one__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Authentic Organic Food</span>
                  <h2 className="section-title__title">Fresh and Healthy Food for Flourishing Growth</h2>
                  <div className="section-title__icon">
                    <img src="/assets/images/icon/section-title-icon-1.png" alt="" />
                  </div>
                </div>
                <p className="healthy-food-one__text">Uganda's equatorial climate and year-round rainfall create ideal growing conditions for a wide variety of crops and livestock. At Futz Agro Farms, we work in harmony with nature to bring you the freshest, most nutritious food grown right here in the heart of East Africa.</p>
                <ul className="list-unstyled healthy-food-one__list">
                  <li className="healthy-food-one__single">
                    <div className="healthy-food-one__content">
                      <div className="healthy-food-one__icon">
                        <span><img src="/assets/images/icon/agriculture (1).png" alt="" /></span>
                      </div>
                      <p className="healthy-food-one__title">Crop Collection</p>
                    </div>
                  </li>
                  <li className="healthy-food-one__single">
                    <div className="healthy-food-one__content">
                      <div className="healthy-food-one__icon">
                        <span><img src="/assets/images/icon/agriculture.png" alt="" /></span>
                      </div>
                      <p className="healthy-food-one__title">Growth</p>
                    </div>
                  </li>
                  <li className="healthy-food-one__single">
                    <div className="healthy-food-one__content">
                      <div className="healthy-food-one__icon">
                        <span><img src="/assets/images/icon/agriculture (2).png" alt="" /></span>
                      </div>
                      <p className="healthy-food-one__title">Upkeep</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Healthy Food One End*/}

      {/*Call One Start*/}
      <section className="call-one">
        <div className="container">
          <div className="call-one__inner wow fadeInUp" data-wow-delay="100ms">
            <div className="call-one__left">
              <h3 className="call-one__content">Natural Goods</h3>
              <div className="call-one__icon">
                <span>📞</span>
              </div>
            </div>
            <div className="call-one__right">
              <div className="call-one__contact-info">
                <p>Talk To Futz Agro Farms</p>
                <a href="tel:+256700123456">+256 700 123 456</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Call One End*/}

      {/*Project One Start*/}
      <section className="project-one">
        <div className="project-one__bg float-bob-y-2" style={{ backgroundImage: 'url(/assets/images/shapes/project-one-shape-1.png)' }}></div>
        <div className="container">
          <div className="unbeatable-one__inner text-center">
            <div className="unbeatable-one__content">
              <div className="unbeatable-one__shape-one wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="/assets/images/shapes/unbeatable-shape-1.png" alt="" className="float-bob-y" />
              </div>
              <div className="unbeatable-one__shape-two wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="/assets/images/shapes/unbeatable-shape-2.png" alt="" className="float-bob-y" />
              </div>
              <p className="unbeatable-one__tagline">We Offer Wellness Products</p>
              <h3 className="unbeatable-one__title">Exceptional Organic and <br /> Agricultural Solutions</h3>
            </div>
          </div>
        </div>
      </section>
      {/*Project One End*/}

      {/*Contact One Start*/}
      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="contact-one__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Contact Now</span>
                  <h2 className="section-title__title mt-5">Get in touch now</h2>
                  <div className="section-title__icon">
                    <img src="/assets/images/icon/section-title-icon-1.png" alt="" />
                  </div>
                </div>
                <p className="contact-one__text">We would love to hear from you. Whether you are a customer, retailer, or partner, our team at Futz Agro Farms in Wakiso District, Uganda is ready to assist. Reach out to us for farm tours, bulk orders, or any enquiries about our organic produce and livestock.</p>
                <ul className="list-unstyled contact-one__contact-list">
                  <li>
                    <div className="icon"><span>📞</span></div>
                    <div className="content">
                      <p>Have Question?</p>
                      <h4><a href="tel:+256700123456">Free +256 700 123 456</a></h4>
                    </div>
                  </li>
                  <li>
                    <div className="icon"><span>&#x2709;</span></div>
                    <div className="content">
                      <p>Write Email</p>
                      <h4><a href="mailto:info@futzagrofarms.co.ug">info@futzagrofarms.co.ug</a></h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="contact-one__right">
                <div className="contact-one__bg float-bob-x" style={{ backgroundImage: 'url(/assets/images/shapes/contact-one-shape-1.png)' }}></div>
                <div className="row">
                  <div className="contact-one__form-box">
                    <form action="/assets/inc/sendemail.php" className="contact-one__form contact-one-validated" noValidate>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-one__input-box">
                            <input type="text" placeholder="Your Name" name="name" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="contact-one__input-box">
                            <input type="email" placeholder="Email Address" name="email" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="contact-one__input-box text-message-box">
                            <textarea name="message" placeholder="Write a Message"></textarea>
                          </div>
                          <div className="contact-one__btn-box">
                            <button type="submit" className="thm-btn contact-one__btn">Send a Message <i><span>&#8594;</span></i></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/*Contact One End*/}
    </>
  )
}
