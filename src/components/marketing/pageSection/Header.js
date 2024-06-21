import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Icon from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='relative flex items-center justify-between py-10 z-10'>
        <div className='w-full'>
        <img src={Logo} alt='Logo Burger House App' className='w-64'/>
        </div>
        <div className='w-full text-secondary'> 
            <div className='flex items-center justify-end'>
                <img src={Icon} alt='Icon-bag'  className='w-5 h-5 mr-2'/>
                <span>Commander votre repas en ligne</span>
            </div>
            <div className='flex items-center justify-end'>
                <Button className={`bg-primary hover:bg-secondary hover:italic`}>
                    Inscription
                </Button>
                <Button className={`bg-secondary hover:bg-primary hover:italic`}>
                    Connexion
                </Button>
            </div>
        </div>
    </div>
  )
}
