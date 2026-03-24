import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top-inner">
          <div className="site-footer-shape-1 float-bob-x" style={{ backgroundImage: 'url(/assets/images/shapes/site-footer-shape-1.png)' }}></div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__about"><br />
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">ThemeInnova</h3>
                </div>
<div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">Discover the Finest Organic Produce and Meat</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="footer-widget__column footer-widget__Explore"><br />
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Explore</h3>
                </div>
                <ul className="footer-widget__Explore-list list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/our-farms">Our Farms</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="footer-widget__column footer-widget__Contact"><br />
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Contact</h3>
                </div>
                <ul className="footer-widget__Contact-list list-unstyled">
                  <li>
                    <div className="icon"><span>&#8982;</span></div>
                    <div className="text"><p>Plot 45, Entebbe Road, Wakiso District, Uganda</p></div>
                  </li>
                  <li>
                    <div className="icon"><span>&#9990;</span></div>
                    <div className="text"><p><a href="tel:+256700123456">+256 700 123 456</a></p></div>
                  </li>
                  <li>
                    <div className="icon"><span>&#x2709;</span></div>
                    <div className="text">
                      <a href="mailto:info@futzagrofarms.co.ug">info@futzagrofarms.co.ug</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget__column footer-widget__news"><br />
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">News</h3>
                </div>
                <ul className="footer-widget__news-list list-unstyled">
                  <div className="col-xl-4 col-lg-12">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6573!2d32.5811!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8f5e1e1b%3A0x5a6e3f2e9b1c4a7d!2sWakiso%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
                      width="400"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    ></iframe>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">© Copyright 2023 by <a href="#">ThemeInnova</a></p>
                <div className="site-footer__social">
                  <a href="https://www.facebook.com/share/19xMhRyVS8/" className="fa fa-facebook"></a>
                  <a href="https://www.instagram.com/innova_tech._?utm_source=qr&igsh=MXdpaHdkZ3BsaHpyeQ==" className="fa fa-instagram"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
