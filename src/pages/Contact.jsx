import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/c2.jpg)' }}></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><span>/</span></li>
              <li>Contact</li>
            </ul>
            <h2>contact us</h2>
          </div>
        </div>
      </section>
      {/*Page Header End*/}

      {/*Google Map Start*/}
      <section className="google-map">
        <div className="container">
          <div className="google-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6573!2d32.5811!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f8f5e1e1b%3A0x5a6e3f2e9b1c4a7d!2sWakiso%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            <div className="contact-details">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="contact-details__single">
                    <div className="contact-details__icon"><span>&#129300;</span></div>
                    <div className="contact-details__text">
                      <p>Have Question?</p>
                      <h3><a href="tel:+256700123456">Free +256 700 123 456</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="contact-details__single">
                    <div className="contact-details__icon"><span>&#x2709;</span></div>
                    <div className="contact-details__text">
                      <p>Write Email</p>
                      <h3><a href="mailto:info@futzagrofarms.co.ug">info@futzagrofarms.co.ug</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                  <div className="contact-details__single">
                    <div className="contact-details__social">
                      <a href="https://www.facebook.com/share/19xMhRyVS8/" className="fa fa-facebook"></a>
                      <a href="https://www.instagram.com/innova_tech._?utm_source=qr&igsh=MXdpaHdkZ3BsaHpyeQ==" className="fa fa-instagram"></a>
                      <a href="https://youtube.com/@innovatecz?si=AYa6ZQ0LtlX2maW6" className="fa fa-youtube"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Google Map End*/}

      {/*Contact Two Start*/}
      <section className="contact-two">
        <div className="contact-two__shape-1 float-bob-x">
          <img src="/assets/images/shapes/contact-two-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Write a Message</span>
            <h2 className="section-title__title">Always ready to assist you</h2>
            <div className="section-title__icon">
              <img src="/assets/images/icon/section-title-icon-1.png" alt="" />
            </div>
          </div>
          <div className="contact-two__form-box">
            <form action="contact.php" method="post" role="form" id="contact_form">
              <div className="row">
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" name="name" id="name" placeholder="Your Name" className="contact-input" required />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="contact-form__input-box">
                    <input type="text" name="supject" id="supject" className="form-control" placeholder="Subject" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="contact-form__input-box text-message-box">
                    <textarea name="message" id="message" className="form-control" placeholder="Your Message" required></textarea>
                  </div>
                  <div className="contact-form__btn-box">
                    <p id="submit" className="thm-btn contact-two__btn">
                      <input type="submit" id="send_message" value="Submit Form" className="btn btn-line" style={{ color: 'white' }} />
                      <i>&#8594;</i>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/*Contact Two End*/}
    </>
  )
}
