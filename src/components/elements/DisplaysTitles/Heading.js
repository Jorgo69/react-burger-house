import React from 'react'

export default function Heading(props) {
    const {
        children,
        variant, // Ex: h1 - h2
        theme, // style : secondary etc ...
        display, // Couleur
        alignement, // alignement
        className, // pour l'ajout de class
    } = props;

    const classDefault = "uppercase";
    let font, color, align;

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

    switch (alignement) {
        case 'center':
            align = 'justify-center'
            break;
        case 'right':
            align = 'justify-end'
            break;    
        default:
            align = 'justify-start'
    }
    
  switch (variant) {
    case "h3" :
        return (
            <div className={`flex ${align}`}>
                <h3 className={`${classDefault} ${className} ${font} ${color} text-2xl`}>
                    {children}
                </h3>
            </div>
          )
    case "h4" :
    return (
        <div className={`flex ${align}`}>
            <h3 className={`${classDefault} ${className} ${font} ${color} text-lg`}>
                {children}
            </h3>
        </div>
        )
    default:
        return (
            <div className={`flex ${align}`}>
            <h2 className={`${theme === 'secondary' ? 'text-3xl lg:text-5xl' : 'text-3xl'} ${classDefault} ${className} ${font} ${color}`}>
                {children}
            </h2>
        </div>
        )
  }
}
