import React from 'react'
import Container from './Container'
import Link from 'next/link'

function UpcomingEvents() {
  return (
    <Container className='mb-[150px]'>
      <div className='flex items-center justify-between mb-[31px] lg:mb-[62px]'>
        <p className='font-rubik text-primary-color text-[20px] font-medium lg:font-bold lg:text-[40px]'>
          Upcoming Events
        </p>
        <div className='bg-teal-colorish flex items-center px-[15px] py-2 border-none rounded-[27px] lg:py-4 lg:px-[30px]'>
          <Link
            className='text-white text-[14px] font-rubik md:text-base lg:text-[18px] lg:font-medium'
            href={'/'}
          >
            Show All
          </Link>
        </div>
      </div>
      <div className='flex flex-col w-full gap-10 lg:flex-row'>
        <div className='flex flex-col gap-5 border border-[#E7E7E7] rounded-[10px] p-5 lg:w-[70%] lg:flex-row'>
          <div className='bg-bg-arabian-one rounded-[10px] self-start lg:w-[60%]'>
            <div className='flex flex-col w-full gap-5 p-4 md:flex-row md:justify-between md:items-center'>
              <div className='h-auto lg:w-[70%]'>
                <img
                  className=''
                  src='../../../images/arabian-saudi-businessman1.png'
                  alt=''
                />
              </div>
              <div className=''>
                <div className='flex flex-col gap-[5px] mb-[20px]'>
                  <h3 className='text-[#FFC265] font-rubik font-medium text-[20px]'>
                    Fiqhul Niqah
                  </h3>
                  <p className='text-white font-rubik text-base'>
                    18 Spetermber 2021
                  </p>
                  <p className='text-white font-rubik text-base'>7:00 PM</p>
                </div>
                <div className='flex flex-col gap-[5px]'>
                  <p className='text-[#FFC265] font-rubik font-medium text-base'>
                    Location:
                  </p>
                  <p className='text-white font-rubik text-base'>
                    At-taqwa Masjid & Islamic Research Center, Sylhet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px] lg:w-[40%]'>
            <div className='flex flex-col gap-[15px]'>
              <p className='text-primary-color font-rubik text-[18px] md:text-[22px] md:font-medium'>
                Marrige Preparation | D. Manjure Ilahi.
              </p>
              <p className='font-rubik text-[#737780] text-base lg:text-[18px] lg:leading-8'>
                18 September 2021 | 7:00 PM
              </p>
              <p className='font-rubik text-[#737780] text-base lg:text-[18px] lg:leading-8'>
                A commonly accepted and encompassing definition of marriage is
                the following: a formal union a &nbsp;
                <span>
                  <Link className='text-[#1DA599] underline' href='/'>
                    Show Details
                  </Link>
                </span>
              </p>
            </div>
            <div className=''>
              <button className='bg-[#FFC265] rounded-[10px] font-rubik text-base font-medium text-[18px] px-[30px] py-4'>
                Register Now
              </button>
            </div>
          </div>
        </div>
        {/* Right path */}
        <div className='flex flex-col gap-5 lg:w-[30%]'>
          <FutureEvents
            date='Sep 18'
            day='Sat'
            titleEvent='Marriage Preparation'
            location='D. Manjure Ilahi  |  7:00 PM'
          />
          <FutureEvents
            date='Sep 18'
            day='Sat'
            titleEvent='Marriage Preparation'
            location='D. Manjure Ilahi  |  7:00 PM'
            showDetail='Show Details'
          />
          <FutureEvents
            date='Sep 18'
            day='Sat'
            titleEvent='Marriage Preparation'
            location='D. Manjure Ilahi  |  7:00 PM'
          />
        </div>
      </div>
    </Container>
  )
}

function FutureEvents(props) {
  return (
    <div
      className={`border rounded-[10px] bg-white p-5 flex gap-[15px] ${props.className}`}
    >
      <div
        className={`rounded-lg self-start bg-[#F4F4F5] py-[7px] px-[15px] ${props.className}`}
      >
        <p className='font-rubik text-[18px] text-primary-color lg:text-[20px] lg:font-medium'>
          {props.date}
        </p>
        <p className='font-rubik text-sm text-primary-color md:text-base'>
          {props.day}
        </p>
      </div>
      <div>
        <div className='flex flex-col gap-[10px] mb-[20px]'>
          <p className='text-primary-color font-rubik font-medium md:text-[25px] md:font-medium'>
            {props.titleEvent}
          </p>
          <p className='text-[#737780] font-rubik text-sm md:text-base'>
            {props.location}
          </p>
        </div>
        <p>
          <Link href={'/'}>{props.showDetail}</Link>
        </p>
      </div>
    </div>
  )
}

export default UpcomingEvents
