import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/lasProducts/LastProducts-1.jpg'
import Image2 from '../../../medias/images/lasProducts/LastProducts-2.jpg'
import Image3 from '../../../medias/images/lasProducts/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <>
    <Container >
        <div className='grid lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-3 lg:gap-9 w-full h-96 lg:px-11  my-20 uppercase font-bold text-white'>

          <div className='relative z-0 bg-primary  lg:row-span-2 h-full rounded-md p-5 lg:p-4'>
            {/* <div className='absolute top-0 left-0 rounded-md z-10 opacity-20 bg-black w-full h-full'></div> */}
            <img src={Image1} alt="description" className='absolute w-full h-full z-0 top-0 left-0 object-cover rounded-md'/>
            <div className='relative z-1'>
              <span className='block font-bold text-lg'>Essayez le aujourd'hui</span>
              <span className='text-xl lg:text-2xl  font-bold'>Burger le plus populaire</span>
            </div>
          </div>

          <div className='relative z-0 bg-primary   h-full rounded-md p-5 lg:p-4'>
              <img src={Image2} alt="description" className='absolute w-full h-full z-0 top-0 left-0 object-cover rounded-md'/>
              <div className='relative z-1'>
                <span className='block font-bold text-lg'>Island Burger</span>
                <span className='block text-xl lg:text-2xl  font-bold'>plus de plaisir</span>
                <span className='text-xl lg:2xl font-bold'>plus d'infos</span>
              </div>
          </div>

          <div className='relative z-0 bg-primary  h-full rounded-md p-5 lg:p-4'>
            <img src={Image3} alt="description" className='absolute w-full h-full z-0 top-0 left-0 object-cover rounded-md'/>
            <div className='relative z-1'>
              <span className='block font-bold text-lg'>Orlando's Burger</span>
              <span className='text-xl lg:text-2xl  font-bold'>frais &amp; pimenter</span>
            </div>
          </div>

        </div>
    </Container>
    </>
  )
}
