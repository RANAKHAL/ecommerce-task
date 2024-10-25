import React from 'react'
import NewArrival from '../components/NewArrival'
import Intro from './Intro'
import TopSelling from '../components/TopSelling'
import Browse from './Browse'
import OurHappy from './OurHappy'
import Group from './Group'
import End from './End'
//import Sign from './Sign'


export default function Home() {
  return (
    <div>
      <Intro />
      <NewArrival />
      <TopSelling />
      <Browse />
      <OurHappy />
      <Group />
      <End />

    </div >
  )
}
