import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplaysTitles/HeadingTitles'
import Heading from '../../elements/DisplaysTitles/Heading'
import product1 from '../../../medias/images/products/Product-1.jpg'
import product2 from '../../../medias/images/products/Product-2.jpg'
import product3 from '../../../medias/images/products/Product-3.jpg'
import Button from '../../elements/Button'

export default function Products() {
  return (
    <div>
      <Container>
        <HeadingTitles>
            Toujours des délices burgers
        </HeadingTitles>
        <Heading theme='secondary' alignement='center' className='my-5'>
            Choisissez et savourez
        </Heading>
        <p className='text-center'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum perspiciatis eos at iste cum dolorum recusandae error dolorem ipsa officia earum nulla, animi est esse fuga, quia labore id.
        </p>
        <div className='grid grid-cols-3 gap-x-1 my-10'>
          <div className='w-full h-full mx-5 pb-5'>
            <div className='relative  w-full h-72'>
              <img src={product2} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-2'>
              <Heading variant='h3'>Lorem ipsum dolor</Heading>
              <p className='text-center'>
                lorem ipsum dolor is simply text for designer and developer.
              </p>
              <Button color='danger' className='font-secondary font-semibold'>commander</Button>

            </div>

          </div>

          <div className='w-full h-full mx-5 pb-5'>
            <div className='relative  w-full h-72'>
              <img src={product3} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-2'>
              <Heading variant='h3'>Lorem ipsum dolor</Heading>
              <p className='text-center'>
                lorem ipsum dolor is simply text for designer and developer.
              </p>
              <Button color='danger' className='font-secondary font-semibold'>commander</Button>

            </div>

          </div>

          <div className='w-full h-full mx-5 pb-5'>
            <div className='relative  w-full h-72'>
              <img src={product1} alt='' className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0' />
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-2'>
              <Heading variant='h3'>Lorem ipsum dolor</Heading>
              <p className='text-center'>
                lorem ipsum dolor is simply text for designer and developer.
              </p>
              <Button color='danger' className='font-secondary font-semibold'>commander</Button>

            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}
