import { useState, useEffect, useRef, useCallback } from 'react'
import { register } from 'swiper/element/bundle'
import './SwiperElement.css'
import mobileImageOne from '../../images/mobile-image-hero-1.jpg'
import mobileImageTwo from '../../images/mobile-image-hero-2.jpg'
import mobileImageThree from '../../images/mobile-image-hero-3.jpg'
import desktopImageOne from '../../images/desktop-image-hero-1.jpg'
import desktopImageTwo from '../../images/desktop-image-hero-2.jpg'
import desktopImageThree from '../../images/desktop-image-hero-3.jpg'
import arrow from '../../images/icon-arrow.svg'

//https://dev.to/ivadyhabimana/customizing-swiperjs-prevnext-arrow-buttons-and-pagination-bullets-in-react-3gkh

const SwiperElement = () => {
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const swiperRef = useRef(null)

  useEffect(() => {
    register()

    const swiperContainer = swiperRef.current

    const params = {
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
              display: none
          }
      `,
      ],
    }

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()

    if (window.innerWidth <= 668) {
      setImage1(mobileImageOne)
      setImage2(mobileImageTwo)
      setImage3(mobileImageThree)
    } else {
      setImage1(desktopImageOne)
      setImage2(desktopImageTwo)
      setImage3(desktopImageThree)
    }
    setTimeout(function () {
      const imageSlider = document.getElementById('image1')
      const navigation =
        document.getElementsByClassName('navigation-wrapper')[0]
      const positionArrows = imageSlider.getBoundingClientRect().width
      const positionArrowsTop = imageSlider.getBoundingClientRect().height - 50
      navigation.style.top = positionArrowsTop + 'px'

      console.log(window.innerWidth)
      if (window.innerWidth <= 769) {
        navigation.style.right = '0px'
      } else {
        navigation.style.left = positionArrows + 'px'
      }
    }, 100)
  }, [])

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slideNext()
  }, [])
  return (
    <div className="swiper-element">
      <swiper-container ref={swiperRef} init="false">
        <swiper-slide class="slide">
          <img id="image1" className="swiper-image" src={image1} alt="" />
          <div className="slider-text-wrapper">
            <p className="swiper-heading">
              Discover innovative ways to decorate
            </p>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <p className="cta">
              SHOP NOW
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <img src={image2} className="swiper-image" alt="" />
          <div className="slider-text-wrapper">
            <p className="swiper-heading">
              We are available all across the globe
            </p>
            <p>
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </p>
            <p className="cta">
              SHOP NOW
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <img src={image3} className="swiper-image" alt="" />
          <div className="slider-text-wrapper">
            <p className="swiper-heading">
              Manufactured with the best materials
            </p>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
            <p className="cta">
              SHOP NOW
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </p>
          </div>
        </swiper-slide>
      </swiper-container>
      <div className="navigation-wrapper">
        <div className="prev-arrow" onClick={handlePrev} />
        <div className="next-arrow" onClick={handleNext} />
      </div>
    </div>
  )
}

export default SwiperElement
