import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/lasProducts/LastProducts-1.jpg'
import Image2 from '../../../medias/images/lasProducts/LastProducts-2.jpg'
import Image3 from '../../../medias/images/lasProducts/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <>
    <Container >
        <div className='grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-9 w-full h-96 px-11  my-20 uppercase font-bold text-white'>
          <div className='relative z-0 bg-primary  row-span-2 h-full rounded-md p-4'>
            <div className='absolute top-0 left-0 rounded-md z-10 opacity-20 bg-black w-full h-full'></div>
          <img src={Image1} className='absolute w-full h-full z-0 top-0 left-0 object-cover rounded-md'/>
          <div className='relative z-1'>
            <span className='block'>Essayez le aujourd'hui</span>
            <span className=''>Burger le plus populaire</span>
          </div>
          </div>
            <div className='relative z-0 bg-primary   h-full rounded-md p-4'>
            <img src={Image2} className='absolute w-full h-full z-0 top-0 left-0 object-cover rounded-md'/>
            <div className='relative z-1'>
              <span className='block'>Island Burger</span>
              <span className=''>plus de plaisir</span>
            </div>
              <span className=''>plus d'infos</span>
            </div>
            <div className='relative z-0 bg-primary  h-full rounded-md p-4'>
            <img src={Image3} className='absolute w-full h-full z-0 top-0 left-0 object-cover rounded-md'/>
            <div className='relative z-1'>
              <span className='block'>Orlando's Burger</span>
              <span className=''>frais &amp; pimenter</span>
            </div>
            </div>
        </div>
    </Container>
    </>
  )
}
