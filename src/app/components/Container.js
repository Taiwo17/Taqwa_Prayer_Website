import React from 'react'

function Container(props) {
  return (
    <div
      className={`px-8 md:px-12 max-w-[1440px] lg:px-[80px] ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

export function Avatar(props) {
  return (
    <div className={`${props.className}`} style={props.style}>
      <img
        src={props.image}
        style={{ width: props.width, height: props.height }}
        alt={props.alt}
      />
    </div>
  )
}

export default Container
