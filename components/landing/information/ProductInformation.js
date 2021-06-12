import React from 'react'

export default function ProductInformation(props) {
  return (
    <div className="flex items-center sm:justify-center space-x-3 sm:mx-auto mx-5">
      <img alt="" src={props.imagePath} className="w-20 h-20" />
      <div>
      <div className="text-sm font-semibold">{props.title}</div>
      <div className="text-sm">{props.description}</div>
      </div>
    </div>
  )
}
