import React from 'react'
import Container from './Container'
import { ClockOne, SunRise, Sunset } from './Icon'

function PrayeringTime(props) {
  return (
    <div
      className={`grid grid-cols-3 mb-[20px] ${
        props.name === 'Asr' ? 'bg-[#1da599]' : ''
      } border rounded-lg border-background-light-white px-[10px] py-[20px] lg:px-[20px] lg:py-10 ${
        props.className
      }`}
    >
      <div className='flex items-center  gap-[5px] lg:gap-[10px]'>
        <ClockOne />
        <p
          className={`${
            props.name === 'Asr' ? 'text-white' : ''
          } font-rubik place-self-center text-base lg:text-[20px] lg:font-medium`}
        >
          {props.name}
        </p>
      </div>
      <div className='place-self-center'>
        <p
          className={`${
            props.name === 'Asr' ? 'text-white' : ''
          } font-rubik  text-base lg:text-[20px] lg:font-medium`}
        >
          {props.begin}
        </p>
      </div>
      <div className='place-self-end'>
        <p
          className={`${
            props.name === 'Asr' ? 'text-white' : ''
          } font-rubik  text-base lg:text-[20px] lg:font-medium`}
        >
          {props.ends}
        </p>
      </div>
    </div>
  )
}

function PrayerTime() {
  return (
    <>
      <Container className=''>
        <div className='flex flex-col mb-[30px] gap-[12px] lg:flex-row lg:justify-between lg:gap-[86px] lg:w-full lg:mb-[62px]'>
          <h3 className='font-rubik text-[30px] font-medium text-primary-color md:text-[30px] md:font-bold lg:w-[464px] lg:max-w-[464px]'>
            At-taqwa Masjid’s Daily Prayers Time
          </h3>
          <p className='font-rubik text-base text-[#737780] md:text-[18px] lg:leading-8 lg:w-[730px]'>
            The Salat is the time when the meeting with Allah and the ascension
            (Mi'raj) of the believer takes place. We all know the importance of
            this obligatory act, and thus, we do not wish to delve into that
            area.
          </p>
        </div>
      </Container>
      <Container className='backgroundPeach mb-[150px]'>
        <div className='grid grid-cols-1 gap-10 w-full lg:grid-cols-2'>
          <div className=''>
            <p className='font-rubik text-[18px] mb-[25px] font-medium text-primary-color leading-[29.63px] lg:text-[25px] '>
              Sunday, September 12, 2021
              <span className='text-teal-colorish'> (03 Safar 1443)</span>
            </p>
            <div className='flex flex-col gap-[20px] mb-[40px] lg:gap-10'>
              <div className='bg-white border rounded-lg border-background-light-white p-[20px] lg:p-[30px]'>
                <div className='flex justify-between items-center px-[10px] py-[20px] bg-[#FFC265] border-0 rounded-[10px] lg:py-[30px] lg:px-[20px]'>
                  <div className='flex items-center gap-[5px] lg:gap-[10px] '>
                    <SunRise />
                    <p className='text-black font-rubik text-base lg:text-[18px] font-medium'>
                      Sun Rise
                    </p>
                  </div>
                  <p className='text-black font-rubik text-base lg:text-[18px] font-medium'>
                    5:38 AM
                  </p>
                </div>
              </div>
              <div className='bg-white w-full border rounded-lg border-background-light-white p-[20px] lg:p-10'>
                <div className='grid grid-cols-3  w-full mb-[25px]'>
                  <p className='font-rubik text-[18px] text-teal-colorish lg:text-[20px] lg:font-medium'>
                    Salah
                  </p>
                  <p className='font-rubik text-[18px] place-self-center text-teal-colorish lg:text-[20px] lg:font-medium'>
                    Begins
                  </p>
                  <p className='font-rubik place-self-end text-[18px] text-teal-colorish lg:text-[20px] lg:font-medium'>
                    Iqaamah
                  </p>
                </div>
                <PrayeringTime
                  name={'Fajr'}
                  begin={'4:21 AM'}
                  ends={'4:40 AM'}
                />
                <PrayeringTime
                  name={'Fajr'}
                  begin={'4:21 AM'}
                  ends={'4:40 AM'}
                />
                <PrayeringTime
                  name={'Asr'}
                  begin={'4:21 AM'}
                  ends={'4:40 AM'}
                />
                <PrayeringTime
                  name={'Fajr'}
                  begin={'4:21 AM'}
                  ends={'4:40 AM'}
                />
                <PrayeringTime
                  className='mb-0'
                  name={'Fajr'}
                  begin={'4:21 AM'}
                  ends={'4:40 AM'}
                />
              </div>
            </div>
            <div className='bg-white border rounded-lg border-background-light-white p-[20px] lg:p-[30px]'>
              <div className='flex justify-between items-center px-[10px] py-[20px] bg-[#0F0F41] border-0 rounded-[10px] lg:py-[30px] lg:px-[20px]'>
                <div className='flex items-center gap-[5px] lg:gap-[10px] '>
                  <Sunset />
                  <p className='text-white font-rubik text-base lg:text-[18px] font-medium'>
                    Sun Rise
                  </p>
                </div>
                <p className='text-white font-rubik text-base lg:text-[18px] font-medium'>
                  5:38 AM
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div>
              <p className='font-rubik text-[18px] mb-[25px] font-medium text-primary-color leading-[29.63px] lg:text-[25px]'>
                Friday, Sept 17,2021
                <span className='text-teal-colorish'> (08 Safar 1443)</span>
              </p>
              <div className='bg-white border rounded-lg border-background-light-white p-[20px] lg:p-[30px]'>
                <div>
                  <div className='flex flex-col'>
                    <div className='lg:px-[130px]'>
                      <p className='font-rubik text-[20px] text-primary-color font-medium text-center'>
                        Khatib of the 182nd’s Jumma Khudba
                      </p>
                    </div>
                    <div className='w-[150px] h-[150px] self-center'>
                      <img src='../../../images/frame.png' alt='Framer Image' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-[10px] items-center mb-[20px]'>
                    <p className='font-rubik text-[20px] text-primary-color lg:font-medium lg:text-[30px]'>
                      Abdur Razzak Bin Yusuf
                    </p>
                    <div className='text-center lg:px-[65px]'>
                      <p className='font-rubik text-base text-primary-color lg:text-[18px]'>
                        Founder of Al-Jami’ah As-Salafiyah Madrasha Dhaka,
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
                <div className='bg-white border rounded-lg border-background-light-white p-[10px] lg:p-[30px] lg:mx-[50px]'>
                  <div className='flex flex-col gap-[20px] items-center'>
                    <div>
                      <p className='font-rubik text-[20px] text-teal-colorish font-medium lg:text-[25px] '>
                        Jumma Khudba Biegin at
                      </p>
                    </div>
                    <div className='bg-[#212830] shadow-[0px_20px_40px_0px_rgba(0, 0, 0, 0.15)] py-[27px] rounded-[10px] w-full lg:px-[100px]'>
                      <p className='text-[#FFC265] font-rubik text-center text-[20px] lg:text-[30px] lg:font-medium'>
                        12:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white border rounded-lg border-background-light-white p-[20px] lg:p-[40px]'>
              <div className='flex items-center justify-between  mb-[30px] lg:justify-start lg:gap-[48%]'>
                <p className='font-rubik text-[18px] text-teal-colorish lg:font-medium lg:text-[20px]'>
                  Friday Events
                </p>
                <p className='font-rubik text-[18px] text-teal-colorish lg:font-medium lg:text-[20px]'>
                  Time
                </p>
              </div>
              <div>
                <div className='bg-white border rounded-lg border-background-light-white p-[20px] mb-[20px] lg:p-[30px]'>
                  <Event questions='Live Questions' live='2:00 PM' />
                </div>
                <div className='bg-white border rounded-lg border-background-light-white p-[20px] lg:p-[30px]'>
                  <Event questions='Islamic Halaqa' live='7:00 PM' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

function Event(props) {
  return (
    <div className='flex justify-between items-center'>
      <p className='font-rubik text-base md:text-[20px] text-[#212830] lg:text-[25px] lg:font-medium'>
        {props.questions}
      </p>
      <p className='font-rubik text-base md:text-[20px] text-[#212830] lg:text-[25px] lg:font-medium'>
        {props.live}
      </p>
    </div>
  )
}

export default PrayerTime
