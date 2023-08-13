import React from 'react'
import Container from './Container'

function MediaCommunity() {
  return (
    <Container className='bg-[#F5F9FC] py-[80px] mb-[80px] lg:mb-[141px]'>
      <div className='flex'>
        <h3 className='text-center text-primary-color mb-[60px] text-[25px] mx-auto font-rubik font-medium lg:font-bold lg:leading-[50px] lg:text-[40px] lg:w-[815px]'>
          Media & Community of At-taqwa Masjid & Islamic Research Center
        </h3>
      </div>
      <div className='grid grid-cols-1 gap-[20px] md:gap-[40px] md:grid-cols-2 lg:grid-cols-4'>
        <SmallCard
          icon='/community_icons/counsell.svg'
          title='Counselling'
          subTitle='Dawah Project'
        />
        <SmallCard
          icon='/community_icons/divorce.svg'
          title='Divorce'
          subTitle='Separate Married Life'
        />
        <SmallCard
          icon='/community_icons/cementry.svg'
          title='Cemetry'
          subTitle='Graveyard'
        />
        <SmallCard
          icon='/community_icons/social_services.svg'
          title='Social Service'
          subTitle='Privately Provided'
        />
        <SmallCard
          icon='/community_icons/religion.svg'
          title='Religious Inquiry'
          subTitle='Comparative Study'
        />
        <SmallCard
          icon='/community_icons/marriage_one.svg'
          title='Marriage'
          subTitle='Nikkah/Katb Al Kitab'
        />
        <SmallCard
          icon='/community_icons/hajj.svg'
          title='Hajj'
          subTitle='Hajj Process & Guidence'
        />
        <SmallCard
          icon='/community_icons/facilities.svg'
          title='Facilites'
          subTitle='Free Books & Others'
        />
        <SmallCard
          icon='/community_icons/security.svg'
          title='Safety & Security'
          subTitle='Authorized Organization'
        />
        <SmallCard
          icon='/community_icons/counsell.svg'
          title='Waqf'
          subTitle='Mortmain Property'
        />
        <SmallCard
          icon='/community_icons/membership.svg'
          title='Membership'
          subTitle='Ummah Community'
        />
        <SmallCard
          icon='/community_icons/right_icon.svg'
          title='More Media & Service'
          subTitle=''
          className='bg-[#1DA599]'
        />
      </div>
    </Container>
  )
}

function SmallCard(props) {
  return (
    <div
      className={`${
        props.title === 'More Media & Service' ? 'bg-[#1DA599]' : 'bg-white'
      } rounded-[10px] border-none py-[25px] px-[30px] ${props.className}`}
    >
      <div
        className={`flex gap-[10px] ${
          props.title === 'More Media & Service' ? 'items-center' : ''
        }`}
      >
        <div>
          <img src={props.icon} alt={props.title} />
        </div>
        <div className='flex flex-col gap-[4px] '>
          <p
            className={`${
              props.title === 'Marriage'
                ? 'text-[#1DA599]'
                : 'text-primary-color'
            }  ${
              props.title === 'More Media & Service'
                ? 'text-white lg:text-base lg:font-medium'
                : ''
            } font-rubik font-medium text-[18px] lg:text-base lg:font-bold`}
          >
            {props.title}
          </p>
          {props.subTitle === '' ? null : (
            <p className='text-[#737780] font-rubik text-base lg:text-[12px]'>
              {props.subTitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MediaCommunity
