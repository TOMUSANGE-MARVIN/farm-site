import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function ScrollToTop() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
      setVisible(scrollTop > 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const radius = 22
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (progress / 100) * circumference

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999,
        width: '56px', height: '56px', borderRadius: '50%',
        background: '#fff', border: 'none', cursor: 'pointer',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        display: visible ? 'flex' : 'none',
        alignItems: 'center', justifyContent: 'center', padding: 0,
      }}
      aria-label="Back to top"
    >
      <svg width="56" height="56" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
        <circle cx="28" cy="28" r={radius} fill="none" stroke="#e0e0e0" strokeWidth="3" />
        <circle
          cx="28" cy="28" r={radius} fill="none"
          stroke="#5cb85c" strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.1s' }}
        />
      </svg>
      <span style={{ fontSize: '18px', color: '#5cb85c', fontWeight: 'bold', zIndex: 1 }}>&#8593;</span>
    </button>
  )
}

function initPlugins() {
  const $ = window.$
  if (!$) return

  // Swiper sliders
  if ($('.thm-swiper__slider').length) {
    $('.thm-swiper__slider').each(function () {
      const elm = $(this)
      const options = elm.data('swiper-options')
      if (window.Swiper && options) {
        new window.Swiper(elm[0], options)
      }
    })
  }

  // Owl Carousel
  if ($('.thm-owl__carousel').length) {
    $('.thm-owl__carousel').each(function () {
      const elm = $(this)
      const options = elm.data('owl-options')
      if (options) elm.owlCarousel(options)
    })
  }

  if ($('.thm-owl__carousel--custom-nav').length) {
    $('.thm-owl__carousel--custom-nav').each(function () {
      const elm = $(this)
      const owlNavPrev = elm.data('owl-nav-prev')
      const owlNavNext = elm.data('owl-nav-next')
      $(owlNavPrev).off('click').on('click', function (e) {
        elm.trigger('prev.owl.carousel')
        e.preventDefault()
      })
      $(owlNavNext).off('click').on('click', function (e) {
        elm.trigger('next.owl.carousel')
        e.preventDefault()
      })
    })
  }

  // Jarallax
  if ($.fn.jarallax && $('.jarallax').length) {
    $('.jarallax').jarallax({ speed: 0.2 })
  }

  // WOW animations
  if (window.WOW && $('.wow').length) {
    new window.WOW({ boxClass: 'wow', animateClass: 'animated', mobile: true, live: true }).init()
  }

  // Circle progress
  if ($.fn.circleProgress && $('.circle-progress').length) {
    $('.circle-progress').each(function () {
      const options = $(this).data('options')
      if (options) $(this).circleProgress(options)
    })
  }

  // Scroll to top
  if ($('.scroll-to-target').length) {
    $('.scroll-to-target').off('click').on('click', function () {
      const target = $(this).attr('data-target')
      $('html, body').animate({ scrollTop: $(target).offset().top }, 1000)
      return false
    })
  }

  // Mobile nav toggler
  if ($('.mobile-nav__toggler').length) {
    $('.mobile-nav__toggler').off('click').on('click', function (e) {
      e.preventDefault()
      $('.mobile-nav__wrapper').toggleClass('expanded')
      $('body').toggleClass('locked')
    })
  }

  // Sticky header content copy
  if ($('.sticky-header__content').length && $('.main-menu').length) {
    const navContent = document.querySelector('.main-menu').innerHTML
    document.querySelector('.sticky-header__content').innerHTML = navContent
  }

  // Mobile nav content copy
  if ($('.main-menu__list').length && $('.mobile-nav__container').length) {
    const navContent = document.querySelector('.main-menu__list').outerHTML
    document.querySelector('.mobile-nav__container').innerHTML = navContent
  }

  // Mobile dropdown toggles
  if ($('.mobile-nav__container .main-menu__list').length) {
    const dropdownAnchor = $('.mobile-nav__container .main-menu__list .dropdown > a')
    dropdownAnchor.each(function () {
      const self = $(this)
      if (self.find('button').length) return
      const toggleBtn = document.createElement('BUTTON')
      toggleBtn.setAttribute('aria-label', 'dropdown toggler')
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>"
      self.append(toggleBtn)
      self.find('button').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('expanded')
        $(this).parent().toggleClass('expanded')
        $(this).parent().parent().children('ul').slideToggle()
      })
    })
  }

  // Odometer
  if ($('.odometer').length) {
    $('.odometer').each(function () {
      $(this).appear(function () {
        const countNumber = $(this).attr('data-count')
        $(this).html(countNumber)
      })
    })
  }

  // Dynamic year
  if ($('.dynamic-year').length) {
    $('.dynamic-year').html(new Date().getFullYear())
  }

  // Accordions
  if ($('.accrodion-grp').length) {
    $('.accrodion-grp').each(function () {
      const accrodionName = $(this).data('grp-name')
      const Self = $(this)
      const accordion = Self.find('.accrodion')
      Self.addClass(accrodionName)
      Self.find('.accrodion .accrodion-content').hide()
      Self.find('.accrodion.active').find('.accrodion-content').show()
      accordion.each(function () {
        $(this).find('.accrodion-title').off('click').on('click', function () {
          if (!$(this).parent().hasClass('active')) {
            $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active')
            $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp()
            $(this).parent().addClass('active')
            $(this).parent().find('.accrodion-content').slideDown()
          }
        })
      })
    })
  }

  // Search toggle
  if ($('.search-toggler').length) {
    $('.search-toggler').off('click').on('click', function (e) {
      e.preventDefault()
      $('.search-popup').toggleClass('active')
      $('.mobile-nav__wrapper').removeClass('expanded')
      $('body').toggleClass('locked')
    })
  }

  // AOS
  if (window.AOS) {
    window.AOS.init()
  }

  // Count bar
  if ($('.count-bar').length) {
    $('.count-bar').appear(function () {
      const el = $(this)
      const percent = el.data('percent')
      $(el).css('width', percent).addClass('counted')
    }, { accY: -50 })
  }

  // Preloader hide
  setTimeout(function () {
    $('.preloader').fadeOut(500)
  }, 500)
}

function CustomCursor() {
  const cursorRef = React.useRef(null)
  const cursorTwoRef = React.useRef(null)

  useEffect(() => {
    document.body.classList.add('custom-cursor')
    const cursor = cursorRef.current
    const cursorTwo = cursorTwoRef.current
    if (!cursor || !cursorTwo) return

    const onMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      cursorTwo.style.left = e.clientX + 'px'
      cursorTwo.style.top = e.clientY + 'px'
    }
    const onDown = () => {
      cursor.classList.add('click')
      cursorTwo.classList.add('custom-cursor__innerhover')
    }
    const onUp = () => {
      cursor.classList.remove('click')
      cursorTwo.classList.remove('custom-cursor__innerhover')
    }
    const onOver = (e) => {
      if (e.target.closest('a, button')) cursor.classList.add('custom-cursor__hover')
    }
    const onOut = (e) => {
      if (e.target.closest('a, button')) cursor.classList.remove('custom-cursor__hover')
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.body.classList.remove('custom-cursor')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor__cursor"></div>
      <div ref={cursorTwoRef} className="custom-cursor__cursor-two"></div>
    </>
  )
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    // Small delay so React has finished rendering DOM
    const timer = setTimeout(() => {
      initPlugins()
    }, 100)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <CustomCursor />

      <div className="preloader">
        <div className="preloader__image"></div>
      </div>

      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>

      <ScrollToTop />
    </>
  )
}
