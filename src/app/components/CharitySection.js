'use client'
import React, { useState } from 'react'
import Container from './Container'
import { imageContainer } from './data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SliderIcon } from './Icon'

function CharitySection() {
  const [slide, setSlide] = useState(null)

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    // arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Container className='bg-[#F5F9FC] mb-[100px] py-20 lg:mb-[152px]'>
      <div className='mb-[60px] lg:px-[200px]'>
        <p className='font-rubik text-[25px] font-medium text-center text-primary-color lg:text-[40px] lg:font-bold lg:leading-[50px]'>
          Extend Your Hand of Charity. Earn Rewards for the Hereafter
        </p>
      </div>
      <>
        <Slider {...settings}>
          {imageContainer.map((i) => {
            return (
              <div className='bg-white rounded-[10px]' key={i.id}>
                <div className=''>
                  <img
                    className={`md:w-full ${
                      i.title === 'Sadaqah Jariyah Fund'
                        ? 'rounded-t-[10px]'
                        : ''
                    }`}
                    src={i.productImage}
                    alt={i.title}
                  />
                </div>
                <div className='p-5'>
                  <div className='mb-[10px]'>
                    <p className='text-[#212830] text-[20px] md:font-semibold lg:text-[30px]'>
                      {i.title}
                    </p>
                  </div>
                  <div className='flex flex-col gap-[80px]'>
                    <div>
                      <p className='text-[#737780] text-base font-rubik lg:leading-8'>
                        {i.desc}
                      </p>
                      {/* {i.title === 'Rebuild Mosque Fund' ? (
                        <div class='w-full h-[10px] bg-[#F0F0F0] rounded-full '>
                          <div
                            class='bg-[#1DA599] text-xs font-medium text-blue-100 flex justify-end  leading-none rounded-[5px]'
                            style={{ width: '57%' }}
                          >
                            <p className=''>57%</p>
                          </div>
                        </div>
                      ) : null} */}
                    </div>
                    <div className=''>
                      <button className='inline-block border border-teal-colorish bg-white font-rubik text-base text-teal-colorish rounded-[10px] px-[30px] py-4 lg:text-[18px] lg:font-medium'>
                        {i.link}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='flex items-center justify-center mt-[60px]'>
          <button>
            <SliderIcon />
          </button>
        </div>
      </>
    </Container>
  )
}

export default CharitySection
