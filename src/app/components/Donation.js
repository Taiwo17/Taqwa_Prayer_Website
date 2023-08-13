import Link from 'next/link'
import React from 'react'

function Donation() {
  return (
    <section className='px-8 md:px-12 lg:px-[68px] mb-[141px]'>
      <div className='flex justify-between'>
        <div className='hidden lg:block'>
          <img src='../../../images/image_one.png' alt='' />
        </div>
        <div className='flex flex-col lg:items-center lg:w-[700px]'>
          <div className=' flex flex-col gap-[25px] mb-[40px]'>
            <h3 className='text-primary-color text-center text-[20px] font-medium lg:text-[40px] font-rubik md:text-[30px] lg:font-bold lg:text-center lg:leading-[50px]'>
              Be a Monthly Donation Member of Our Community
            </h3>
            <p className='font-rubik text-base text-[#737780] lg:text-[18px] text-center leading-8'>
              Register for membership. You can donate monthly whatever you want.
              No fixed rate here. Our monthly donation starts from $5 to
              limitless
            </p>
          </div>
          <div className='bg-teal-colorish flex items-center justify-center px-[15px] py-2 lg:px-[30px] rounded-[10px] lg:py-4'>
            <Link
              className='text-white self-center text-center mx-auto text-base lg:text-[18px] lg:font-medium'
              href='/'
            >
              Membership Registation
            </Link>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img src='../../../images/image_two.png' alt='' />
        </div>
      </div>
      <div className='flex justify-around mt-[-100px] w-[100%]'>
        <div className='hidden lg:block'>
          <img src='../../../images/image3.png' alt='' />
        </div>
        <div className='hidden lg:block'>
          <img src='../../../images/image4.png' alt='' />
        </div>
      </div>
    </section>
  )
}

export default Donation
