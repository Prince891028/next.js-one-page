import React from 'react'
import { ads } from '../../../mockdata/landing/Ads'
import AdComponent from './AdComponent'

export default function AboutSection() {
  return (
    <div className="max-w-1920 mx-auto">
      {
        ads.map((item, index) => (
          <div key={`AD-${index}`} className="w-full max-w-1920 mx-auto flex justify-end">
            <AdComponent imagePath={item.imagePath} title={item.title} description={item.description} label={item.label} reviews={item.reviews} direction={`${index % 2 == 0 ? "right" : "left"}`} />
          </div>
        ))
      }
    </div>
  )
}
