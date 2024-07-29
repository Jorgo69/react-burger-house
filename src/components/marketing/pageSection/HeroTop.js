import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Product from '../../../medias/images/heroTop/burger-hero-top.png'
import Container from '../../elements/Container'
import Header from './Header'

import Button from '../../elements/Button'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full'>
      <div className='bg-repeat w-full h-full pb-20 md:pb-40' style={{ backgroundImage: `url(${Illustration})`}}>
        <Container>
          <Header />


          <div className='relative w-full mt-10 md:mt-28 '> {/* la relative et Z en Css z-index permet de changer la position ici placer l'element au dessus */}
          <img src={Product} className='hidden lg:block absolute lg:-top-64 right-0 z-0' style={{width: '568px'}}  alt='Menu Hamburger Burger a la sauce accompagner de Cola' />
          <div className='hidden lg:block rounded-full absolute right-80 top-40  bg-danger w-40 h-40 p-3'>
            <div className='rounded-full w-full h-full text-white border-2 border-dashed border-white flex items-center justify-center'>
            <div className='text-center'>
              <span className='block font-extrabold'>
                <span className='text-5xl'>5</span>.49E
              </span>
              <span className='tracking-widest uppercase'>seulement</span>
            </div>
            </div>
          </div>
            <div className='relative text-secondary uppercase z-10 text-left md:text-center lg:text-left'>
              <h1 className='mb-4 font-semibold'>C'est le moment de gouter au bon gout des Hamburgers.</h1>
              <h2 className='font-secondary shadowTitleSecondary'>
                <span className='text-7xl md:text-8xl block'>Burger</span> 
                <span className='text-5xl md:text-6xl block sm:inline-block'>House </span> 
                <span className='text-4xl ml-0 sm:ml-3'>Click<span className='text-danger'>&amp;</span>Collect</span>
              </h2>
            </div>
          </div>
          {/* <Button className="mt-5" color="secondary" theme="small">
            Creer mon compte
          </Button>
          <Button className="mt-5">
            Creer mon compte
          </Button> */}
          <Button className="mt-5 w-full lg:w-6/12" color="secondary" theme="big">
            Creer mon compte
          </Button>
        </Container>
      </div>
    </div>
  )
}
