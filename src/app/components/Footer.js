import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className=''>
      <Container className='bg-[#212830] pb-[50px] py-20 md:pb-0'>
        <div className='mb-[25px]'>
          <img src='../../../images/Footer_logo.png' alt='Footer logo' />
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className='mb-[30px] lg:mb-0'>
            <p className='mb-5 font-rubik text-white opacity-70 text-base lg:text-[18px] lg:leading-8 lg:w-[366px]'>
              A mosque and islamic resource center & foundation.
            </p>
            <div className='flex flex-col gap-[15px] mb-5 lg:mb-[41px]'>
              <ContactIcon
                icon='../../../footer_icons/contact_icons/call.svg'
                contactInfo='(217) 555-0113'
              />
              <ContactIcon
                icon='../../../footer_icons/contact_icons/email.svg'
                contactInfo='sara.cruz@example.com'
              />
              <ContactIcon
                icon='../../../footer_icons/contact_icons/address.svg'
                contactInfo='Kumarpara, Sylhet, Bangladesh'
              />
            </div>
            <div className='flex gap-[15px]'>
              <SocialFooterIcons socialIcons='../../../footer_icons/fb.svg' />
              <SocialFooterIcons socialIcons='../../../footer_icons/tt.svg' />
              <SocialFooterIcons socialIcons='../../../footer_icons/insta.svg' />
              <SocialFooterIcons socialIcons='../../../footer_icons/yt.svg' />
            </div>
          </div>
          {/* Other */}
          <div className='mb-6 lg:mb-0'>
            <FooterLinks
              footerHeader='Quick Links'
              link1='Home'
              link2='About Us'
              link3='News'
              link4='Events'
              link5='Online Store'
            />
          </div>
          <div className='mb-6 lg:mb-0'>
            <FooterLinks
              footerHeader='Education'
              link1='Hifz'
              link2='Aqidah'
              link3='Rokiah'
              link4='Tajweed'
              link5='Quran Studies'
            />
          </div>
          <div className='mb-6 lg:mb-0'>
            <FooterLinks
              footerHeader='Donation'
              link1='Monthly'
              link2='Sadakah'
              link3='Jakat'
              link4='Qurbani'
              link5='Masjid Fund'
            />
          </div>
          <div className='mb-6 lg:mb-0'>
            <FooterLinks
              footerHeader='About Us'
              link1='Committee'
              link2='Imam'
              link3='Social Workers'
              link4='Media'
              link5='Others'
            />
          </div>
        </div>
      </Container>
    </footer>
  )
}

function ContactIcon(props) {
  return (
    <div className='flex items-center gap-[5px]'>
      <div>
        <img src={props.icon} alt='' />
      </div>
      <p className='text-white text-base font-rubik'>{props.contactInfo}</p>
    </div>
  )
}

function SocialFooterIcons(props) {
  return (
    <div>
      <img src={props.socialIcons} alt='icons' />
    </div>
  )
}

function FooterLinks(props) {
  return (
    <div>
      <div className='mb-[20px]'>
        <p className='font-rubik text-[18px] text-white lg:font-medium lg:text-[24px]'>
          {props.footerHeader}
        </p>
      </div>
      <div className='flex flex-col gap-[5px]'>
        <p className='text-white opacity-70 font-rubik text-base lg:text-[18px] lg:leading-[30px]'>
          {props.link1}
        </p>
        <p className='text-white opacity-70 font-rubik text-base lg:text-[18px] lg:leading-[30px]'>
          {props.link2}
        </p>
        <p className='text-white opacity-70 font-rubik text-base lg:text-[18px] lg:leading-[30px]'>
          {props.link3}
        </p>
        <p className='text-white opacity-70 font-rubik text-base lg:text-[18px] lg:leading-[30px]'>
          {props.link4}
        </p>
        <p className='text-white opacity-70 font-rubik text-base lg:text-[18px] lg:leading-[30px]'>
          {props.link5}
        </p>
      </div>
    </div>
  )
}

export default Footer
