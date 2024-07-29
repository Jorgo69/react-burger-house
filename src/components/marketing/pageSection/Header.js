import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Picto from '../../../medias/svg/picto-burger-house.svg'
import Icon from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='relative flex items-center justify-between py-10 z-10'>
        <div className='w-full'>
            <img src={Logo} alt='Logo Burger House App' className='w-64 hidden md:block'/>
            <img src={Picto} alt='Logo Burger House App' className='w-10 md:hidden block  '/>
        </div>
        <div className='w-full text-secondary'> 
            <div className='md:flex items-center justify-end hidden'>
                <img src={Icon} alt='Icon-bag'  className='w-5 h-5 mr-2'/>
                <span>Commander votre repas en ligne</span>
            </div>
            <div className='md:mt-5 flex items-center justify-end'>
                <Button className={`tracking-widest mr-3`}>
                    Inscription
                </Button>
                <Button className={`tracking-widest`} color="secondary">
                    Connexion
                </Button>
            </div>
        </div>
    </div>
  )
}
