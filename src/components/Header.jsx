import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const transparent = isHome && !scrolled

  return (
    <>
      <nav className="main-menu">
        <header
          className="main-header"
          style={{
            boxShadow: transparent ? 'none' : '0 2px 12px rgba(0,0,0,0.08)',
            transition: 'box-shadow 0.3s',
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          }}
        >
          <div className="main-header__wrapper" style={{ background: transparent ? 'transparent' : '#fff', transition: 'background 0.3s' }}>
            <div className="main-header__wrapper-inner">
              <div className="main-header__logo">
                <Link to="/" style={{ fontSize: '24px', fontWeight: '700', color: transparent ? '#fff' : 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Futz Farm</Link>
              </div>
              <div className="main-header__menu-box-bottom">
                <div className="main-menu__wrapper">
                  <div className="main-menu__wrapper-inner">
                    <div className="main-menu__left">
                      <div className="main-menu__main-menu-box">
                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                        <ul className="main-menu__list">
                          {[
                            { to: '/', label: 'Home', exact: true },
                            { to: '/about', label: 'About Us' },
                            { to: '/our-farms', label: 'Our Farms' },
                            { to: '/services', label: 'Futz Organic' },
                            { to: '/contact', label: 'Contact Us' },
                          ].map(({ to, label, exact }) => {
                            const isActive = exact ? location.pathname === to : location.pathname.startsWith(to)
                            return (
                              <li key={to} className={isActive ? 'current' : ''}>
                                <Link
                                  to={to}
                                  style={{
                                    color: transparent ? '#fff' : '',
                                    fontWeight: isActive ? '700' : '',
                                    borderBottom: isActive ? '2px solid var(--agrion-base, #5cb85c)' : '',
                                  }}
                                >{label}</Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="main-menu__right">
                      <div className="main-menu__search-cart-btn-box">
                        <div className="main-menu__search-box">
                          <a href="#" className=""><span className="">&#128269;</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>
          <div className="logo-box">
            <Link to="/" style={{ fontSize: '22px', fontWeight: '700', textDecoration: 'none', color: '#fff' }}>Futz Farm</Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/our-farms', label: 'Our Farms' },
                { to: '/services', label: 'Futz Organic' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to} className={location.pathname === to ? 'current' : ''}>
                  <Link to={to} onClick={() => {
                    document.querySelector('.mobile-nav__wrapper')?.classList.remove('expanded')
                    document.body.classList.remove('locked')
                  }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:info@futzagrofarms.co.ug">info@futzagrofarms.co.ug</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+256700123456">+256 700 123 456</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://www.facebook.com/share/19xMhRyVS8/" className="fab fa-facebook-square"></a>
              <a href="https://www.instagram.com/innova_tech._" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="thm-btn">
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
