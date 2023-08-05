'use client'
import React from 'react'
import Container from './Container'
import Link from 'next/link'

function HeroSection() {
  return (
    <section className='lg:pt-[100px] pb-[100px] md:h-[1000px] bg-gradient-to-r from-[#F8F6ED] to-[#F8F6ED] lg:pb-0 lg:h-auto mb-[80px] lg:mb-[150px]'>
      <Container className='flex flex-col-reverse w-full gap-[30px] lg:flex-row lg:pt-[50px] lg:justify-between lg:items-center'>
        <div className='flex flex-col gap-[15px] w-full lg:gap-[20px]'>
          <div className='flex items-center bg-[#E7F3F0] rounded-lg py-[10px] pl-[15px] pr-[20px] lg:gap-[10px]'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 10.8001C12.3956 10.8001 12.7822 10.6828 13.1111 10.463C13.44 10.2433 13.6964 9.93091 13.8478 9.56545C13.9991 9.2 14.0387 8.79787 13.9616 8.40991C13.8844 8.02195 13.6939 7.66558 13.4142 7.38587C13.1345 7.10617 12.7781 6.91569 12.3902 6.83852C12.0022 6.76135 11.6001 6.80095 11.2346 6.95233C10.8692 7.1037 10.5568 7.36005 10.3371 7.68895C10.1173 8.01785 10 8.40453 10 8.80009C10 9.33052 10.2107 9.83923 10.5858 10.2143C10.9609 10.5894 11.4696 10.8001 12 10.8001ZM11.29 17.7101C11.383 17.8038 11.4936 17.8782 11.6154 17.929C11.7373 17.9797 11.868 18.0059 12 18.0059C12.132 18.0059 12.2627 17.9797 12.3846 17.929C12.5064 17.8782 12.617 17.8038 12.71 17.7101L16.8 13.6101C17.75 12.6606 18.397 11.4508 18.6593 10.1335C18.9216 8.81632 18.7873 7.45089 18.2735 6.20998C17.7597 4.96906 16.8894 3.9084 15.7727 3.16215C14.656 2.41589 13.3431 2.01758 12 2.01758C10.6569 2.01758 9.344 2.41589 8.22731 3.16215C7.11062 3.9084 6.24033 4.96906 5.72652 6.20998C5.2127 7.45089 5.07845 8.81632 5.34073 10.1335C5.60301 11.4508 6.25005 12.6606 7.2 13.6101L11.29 17.7101ZM7.23 8.34009C7.29833 7.62711 7.52502 6.93838 7.89352 6.3242C8.26203 5.71002 8.76305 5.1859 9.36 4.79009C10.1442 4.27519 11.0619 4.00085 12 4.00085C12.9381 4.00085 13.8558 4.27519 14.64 4.79009C15.233 5.18454 15.7311 5.70549 16.0987 6.31547C16.4663 6.92546 16.6942 7.60932 16.7659 8.31787C16.8376 9.02643 16.7514 9.74208 16.5135 10.4133C16.2756 11.0846 15.8919 11.6948 15.39 12.2001L12 15.5901L8.61 12.2001C8.10752 11.6997 7.72293 11.0936 7.48421 10.4259C7.24548 9.75816 7.15864 9.04561 7.23 8.34009ZM19 20.0001H5C4.73478 20.0001 4.48043 20.1054 4.29289 20.293C4.10536 20.4805 4 20.7349 4 21.0001C4 21.2653 4.10536 21.5197 4.29289 21.7072C4.48043 21.8947 4.73478 22.0001 5 22.0001H19C19.2652 22.0001 19.5196 21.8947 19.7071 21.7072C19.8946 21.5197 20 21.2653 20 21.0001C20 20.7349 19.8946 20.4805 19.7071 20.293C19.5196 20.1054 19.2652 20.0001 19 20.0001Z'
                fill='#1DA599'
              />
            </svg>
            <p className='text-rubik text-[10px] md:text-base  leading-[20px] lg:text-base'>
              At-taqwa Masjid & Islamic Center, Kumarpara, Sylhet
            </p>
          </div>
          <h1 className='font-rubik text-primary-color text-[30px] font-semibold leading-[33px] lg:w-[601px] lg:text-[60px] lg:font-bold lg:leading-[71.1px]'>
            A reliable Islamic Center to Follow the Qur’an & Sunnah
          </h1>
          <p className='font-rubik text-[#737780] text-base md:text-[18px] md:leading-[32px] mb-[20px] md:mb-[40px]'>
            The Salat is the time when the meeting with Allah and the ascension
            (Mi'raj) of the believer takes place.
          </p>
          <div>
            <Link
              className='bg-[#FFC265] py-4 px-[30px] rounded-[10px] font-rubik text-base md:text-[18px] md:font-medium'
              href='/'
            >
              Tour in Taqwa
            </Link>
          </div>
        </div>
        <div className=''>
          <div className='shrink-0'>
            <img
              className='object-cover lg:w-[600px] lg:max-w-[600px]'
              src='../../../images/hero_img.png'
              alt='Hero Image'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
