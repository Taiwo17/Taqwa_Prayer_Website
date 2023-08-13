import React from 'react'
import Container from './Container'

function ResearchCenter() {
  return (
    <Container className='mb-[150px]'>
      <div>
        <div className='mb-[60px]'>
          <p className='font-rubik text-[#212830] text-[20px] text-center font-medium leading-tight lg:leading-[50px] md:text-[30px] lg:px-[12%] lg:text-[40px]'>
            Different Programs of At-taqwa Masjid & Islamic Research Center
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 lg:grid-cols-4'>
          <ResearchDetails
            icons='../../../research_svg/one.svg'
            text='News/Blogs'
          />
          <ResearchDetails
            icons='../../../research_svg/two.svg'
            text='Education'
          />
          <ResearchDetails
            icons='../../../research_svg/three.svg'
            text='Events'
          />
          <ResearchDetails
            icons='../../../research_svg/four.svg'
            text='Donation'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4'>
          <ResearchDetails
            icons='../../../research_svg/five.svg'
            text='Social Services'
          />
          <ResearchDetails
            icons='../../../research_svg/six.svg'
            text='Organic Food'
          />
          <ResearchDetails
            icons='../../../research_svg/seven.svg'
            text='Online Shop'
          />
          <ResearchDetails
            icons='../../../research_svg/eight.svg'
            text='Islamic Library'
          />
        </div>
      </div>
    </Container>
  )
}

function ResearchDetails(props) {
  return (
    <div
      className={` group flex rounded-[12px] py-[30px] hover:bg-[#1da599] hover:transition hover:duration-1000 hover:cursor-pointer  ${
        props.text === 'Events'
          ? 'bg-[#1da599] group text-white'
          : 'bg-[#F5F9FC]'
      }`}
    >
      <div className='flex flex-col mx-auto gap-[10px] justify-between lg:gap-[20px]'>
        <div className='shrink-0 self-center'>
          <img
            className='object-cover self-center'
            src={props.icons}
            alt={props.text}
          />
        </div>
        <div>
          <p
            className={`font-rubik  text-[25px] md:text-[30px] lg:font-medium group-hover:text-white ${
              props.text === 'Events' ? ' group text-white' : 'text-[#252532]'
            }`}
          >
            {props.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResearchCenter
