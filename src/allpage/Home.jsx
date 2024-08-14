import React from 'react'
import Banner from '../Componnets/Pages/Banner'
import Arrivals from '../Componnets/Pages/Arrivals'
import Clockpart from '../Componnets/Pages/Clockpart'
import Offerpage from '../Componnets/Pages/Offerpage'
import Offerproduct from '../Componnets/Pages/Offerproduct'
const Home = () => {
  return (
    <>
    <Banner/>
    <Offerproduct/>
    <Arrivals/>
    <Clockpart/>
    <Offerpage/>
    </>
  )
}

export default Home