import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Product from '../../../medias/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
      <div className='bg-repeat w-full h-full' style={{ backgroundImage: `url(${Illustration})`}}>
        <Container>
          <Header />

          <div className='relative w-full mt-28 '> {/* la relative et Z en Css z-index permet de changer la position ici placer l'element au dessus */}
          <img src={Product} className='absolute -top-64 right-0 w-6/12 z-0'  alt='Menu Hamburger Burger a la sauce accompagner de Cola' />
            <div className='relative text-secondary text-xl w-2/3 uppercase z-10'>
              <h1 className='mb-4 font-semibold'>C'est le moment de gouter au bon gout des Hamburgers.</h1>
              <h2 className='font-secondary'>
                <span className='text-8xl block'>Burger</span> 
                <span className='text-6xl'>House </span> 
                <span className='text-4xl'>Click<span className='text-danger'>&amp;</span>Collect</span>
                </h2>
            </div>
          </div>
          <Button className="mt-5">
            Creer mon compte
          </Button>
        </Container>
      </div>
    </div>
  )
}
