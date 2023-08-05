import React from 'react'

function Container(props) {
  return (
    <div
      className={`px-8 md:px-12 max-w-[1440px] lg:px-[80px] ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default Container
