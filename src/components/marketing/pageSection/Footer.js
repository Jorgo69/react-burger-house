import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
import {EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Logo from '../../../medias/svg/Logo-burger-house-white.svg'
import IcoInsta from '../../../medias/svg/instagram-brands.svg'
import IcoFace from '../../../medias/svg/facebook-f-brands.svg'
import IcoTwit from '../../../medias/svg/twitter-brands.svg'
import IcoWhat from '../../../medias/svg/whatsapp-brands.svg'

export default function Footer() {
  return (
    <Container>
      <div className='relative mb-20 p-5 text-white '>
        <img src={BackgroundImage} alt='Un plan de travail' className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0' />
        <div className='relative bg-danger grid grid-cols-2 z-10'>
            <div className='bg-primary p-5 mt-20 mb-28 '>
                <img src={Logo} alt='Burger en Blanc' className=' w-2/3' />
                <p className='text-white mt-10'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className='relative bg-primaryHover h-full flex flex-col items-center justify-center'>
                <div className='flex items-center'>
                    <MapPinIcon className='size-10 mr-5' />
                    <span className='uppercase font-extrabold text-lg  tracking-tighter'>100 metre de l'Echangeur Houeyiho, Cotonou</span>
                </div>
                <div className='flex items-center'>
                    <EnvelopeIcon className='size-10 mr-5' />
                    <span className='uppercase font-extrabold text-lg  tracking-tighter'>Jorgo@info.bj</span>
                </div>
            </div>
        </div>
        <div className='relative flex items-center justify-between bg-danger h-10 '>
            <div className='uppercase  font-extrabold tracking-tighter text-sm'>
                @ Burger House 2024, Tout Droit Reserver
            </div>
            <div className='flex'>
                    <a href='http://instagram.com' target='_blank' rel='noreferrer' className='group'>
                        <img src={IcoInsta} className='w-7 h-7 text-white bg-white rounded-full p-1 mr-2' />
                    </a>
                
                    <a href='#' target='_blank' rel='noreferrer' className='group'>
                        <img src={IcoFace} className='w-7 h-7 text-white bg-white rounded-full p-1 mr-2' />
                    </a>
                
                    <a href='#' target='_blank' rel='noreferrer' className='group'>
                        <img src={IcoTwit} className='w-7 h-7 text-white bg-white rounded-full p-1 mr-2' />
                    </a>
                
                    <a href='#' target='_blank' rel='noreferrer' className='group'>
                        <img src={IcoWhat} className='w-7 h-7 text-white bg-white rounded-full p-1' />
                    </a>
                
            </div>
        </div>

      </div>

    </Container>
  )
}
