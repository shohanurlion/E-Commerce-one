import React from 'react'
import Container from '../Commonelemts/Container'
import clockimg from '../../assets/Ads_2.png'

const Clockpart = () => {
  return (
    <>
    <Container>
        <div className='xl:py-20 py-7'>
        <img src={clockimg} alt='clock'/>
        </div>
    </Container>
    </>
  )
}

export default Clockpart