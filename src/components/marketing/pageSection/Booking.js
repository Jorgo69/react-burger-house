import React from 'react'
import Container from '../../elements/Container'
import Assiette from '../../../medias/images/background/Assiette-burger-frites.png'
import Burger from '../../../medias/images/background/Burger.png'
import Sauce from '../../../medias/images/background/Sauce-pimente.png'
import Heading from '../../elements/DisplaysTitles/Heading'

export default function Booking() {
  return (
    <Container>
      <div className='relative mb-20'>
        <img src={Burger} alt='Un Hamburger' className='absolute -top-20 -left-36 z-10' />
        <img src={Sauce} alt='une sauce pimente' className='absolute bottom-0 left-0' />
        <img src={Assiette} alt='Une assiete' className='absolute -bottom-52 -right-96' />
        {/* <div className='max-w-4xl mx-auto'></div> */}
        <div className='max-w-3xl mx-auto px-10 py-20'>
        <Heading variant='h3' alignement='center'>
            Reservation
        </Heading>
        <Heading alignement='center' theme='secondary' className='mt-5'>
            Reserver votre table
        </Heading>
        <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
            {/* Input: Name */}
            <div className=''>
                <label htmlFor='name'>Nom</label>
                <input 
                type='text'
                name='name'
                id='name'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border  block w-full border-gray-400 rounded-md p-4'
                placeholder='Joh Doe'
                />
            </div>
            {/* Input: Email */}
            <div className=''>
                <label htmlFor='email'>Email</label>
                <input 
                type='email'
                name='email'
                id='email'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border  block w-full border-gray-400 rounded-md p-4'
                placeholder='JohDoe@gmail.com'
                />
            </div>
            {/* Input: Date */}
            <div className=''>
                <label htmlFor='date'>Date</label>
                <input 
                type='date'
                name='date'
                id='date'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border  block w-full border-gray-400 rounded-md p-4'
                />
            </div>
            {/* Input: Time */}
            <div className=''>
                <label htmlFor='time'>Heure</label>
                <input 
                type='time'
                name='time'
                id='time'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border  block w-full border-gray-400 rounded-md p-4'
                min="09:00"
                max="18:00"
                />
            </div>
            {/* Input: Text */}
            <div className=''>
                <label htmlFor='customer'>Nombre de personne</label>
                <input 
                type='text'
                name='customer'
                id='customer'
                autoComplete='off'
                className='focus:ring-primary focus:border-primary focus:border  block w-full border-gray-400 rounded-md p-4'
                placeholder='Joh Doe'
                />
            </div>
            {/* Input:button */}
            <div className=''>
                <label htmlFor='sendBooking' className='invisible'>Reserver votre repos</label>
                <input 
                type='button'
                name='sendBooking'
                id='sendBooking'
                className='bg-danger hover:bg-dangerHover w-full text-white font-secondary tracking-widest uppercase py-5 rounded-md cursor-pointer animate'
                value='Reservez votre repas'
                />
            </div>

        </form>
        </div>
      </div>
    </Container>
  )
}
