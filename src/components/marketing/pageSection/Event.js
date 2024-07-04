import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel';
import '../../../css/caroussel.css'
import Image from '../../../medias/images/products/Product-1.jpg'

export default function Event() {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={Image} onDragStart={handleDragStart} role="presentation" />,
        <img src={Image} onDragStart={handleDragStart} role="presentation" />,
        <img src={Image} onDragStart={handleDragStart} role="presentation" />,
    ];

  return (
      <Container>
        <div className='shadow-2xl mb-20 h-96'>
            <AliceCarousel
             mouseTracking
             items={items}
            //  autoPlay
            //  infinite
            //  autoPlayInterval={4000}
             disableButtonsControls
             />
        </div>
      </Container>
  )
}
