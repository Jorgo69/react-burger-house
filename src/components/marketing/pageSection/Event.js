import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel';
import '../../../css/caroussel.css'
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../medias/images/products/Product-1.jpg'
import Image3 from '../../../medias/images/products/Product-2.jpg'
import Heading from '../../elements/DisplaysTitles/Heading';

export default function Event() {
  const Slide = ({children, category, title, image, alt}) => {
    return(
      <div className='grid md:grid-cols-2 p-3 md:p-6'>
        <div className='p-5 md:p-10 md:mb-10'>
          <Heading variant='h4'>
            {category}
            </Heading>
            <Heading theme='secondary' variant='h3'>
            {title}
          </Heading>
          <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800'>
          {children}
          </p>
        </div>
        <div className='relative w-full h-96 md:h-full'>
        <img src={image} alt={alt} className='bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0' />
        </div>
      </div>
    )
  }

    const items = [
        <Slide
          image={Image1}
          alt="description de l'image 1"
          category="evenement a venir"
          title="vivez la demi-finale"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt eligendi reiciendis, adipisci explicabo iure accusantium architecto, consequatur, dicta odit aut impedit vel eum officiis cupiditate expedita dignissimos ut consequuntur?
        </Slide>,
        <Slide
        image={Image2}
        alt="description de l'image 2"
        category="evenement a venir"
        title="vivez la demi-finale"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt eligendi reiciendis, adipisci explicabo iure accusantium architecto, consequatur, dicta odit aut impedit vel eum officiis cupiditate expedita dignissimos ut consequuntur?
      </Slide>,
      <Slide
      image={Image3}
      alt="description de l'image 3"
      category="evenement a venir"
      title="vivez la demi-finale"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt eligendi reiciendis, adipisci explicabo iure accusantium architecto, consequatur, dicta odit aut impedit vel eum officiis cupiditate expedita dignissimos ut consequuntur?
    </Slide>,
    ];

  return (
      <Container>
        <div className='shadow-2xl mb-20 border-gray-100'>
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
