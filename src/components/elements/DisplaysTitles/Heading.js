import React from 'react'

export default function Heading(props) {
    const {
        children,
        variant, // Ex: h1 - h2
        theme, // style : secondary etc ...
        display, // Couleur
    } = props;

    const classDefault = "mt-5 uppercase";
    let font, color;
    switch (theme) {
        case 'secondary':
            font = 'font-secondary font-semibold'
            break;
    
        default:
            font = 'tracking-tighter'
    }

    switch (display) {
        case 'gray':
            color = 'text-gray-600'
            break;
    
        default:
            color = 'text-secondary'
    }
    
  switch (variant) {
    case "h3" :
        return (
            <div className='flex items-center justify-center my-5'>
                <h3 className={`${classDefault} ${font} ${color} text-2xl`}>
                    {children}
                </h3>
            </div>
          )
    default:
        return (
            <div className='flex items-center justify-center my-5'>
            <h2 className={`${theme === 'secondary' ? 'text-5xl' : 'text-3xl'} ${classDefault} ${font} ${color}`}>
                {children}
            </h2>
        </div>
        )
  }
}
