import React from 'react'
import errorImage from '../src/assets/404.png'
export default function ErrorPage() {
  return (
    <div>
      <img src={errorImage} className='w-100'></img>
    </div>
  )
}
