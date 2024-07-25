import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel';
import '../../../css/caroussel.css'
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../medias/images/products/Product-1.jpg'
import Image3 from '../../../medias/images/products/Product-2.jpg'
import Heading from '../../elements/DisplaysTitles/Heading';

export default function Event() {
  const Slide = ({children, category, title, image}) => {
    return(
      <div className='grid grid-cols-2 p-6 h-96'>
        <div className='p-10 mb-10'>
          <Heading variant='h4'>
            {category}
            </Heading>
            <Heading theme='secondary' variant='h3'>
            {title}
          </Heading>
          <p className='tracking-wide leading-relaxed'>
          {children}
          </p>
        </div>
        <div className='relative w-full'>
        <img src={image} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0' />
        </div>
      </div>
    )
  }

    const items = [
        <Slide
          image={Image1}
          category="evenement a venir"
          title="vivez la demi-finale"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt eligendi reiciendis, adipisci explicabo iure accusantium architecto, consequatur, dicta odit aut impedit vel eum officiis cupiditate expedita dignissimos ut consequuntur?
        </Slide>,
        <Slide
        image={Image2}
        category="evenement a venir"
        title="vivez la demi-finale"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt eligendi reiciendis, adipisci explicabo iure accusantium architecto, consequatur, dicta odit aut impedit vel eum officiis cupiditate expedita dignissimos ut consequuntur?
      </Slide>,
      <Slide
      image={Image3}
      category="evenement a venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt eligendi reiciendis, adipisci explicabo iure accusantium architecto, consequatur, dicta odit aut impedit vel eum officiis cupiditate expedita dignissimos ut consequuntur?
    </Slide>,
    ];

  return (
      <Container>
        <div className='shadow-2xl mb-20 h-96'>
            <AliceCarousel
             mouseTracking
             items={items}
             autoPlay
             infinite
             autoPlayInterval={4000}
             disableButtonsControls
             animationType='fadeout'
             />
        </div>
      </Container>
  )
}
