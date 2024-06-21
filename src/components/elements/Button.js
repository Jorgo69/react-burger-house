import React from 'react'

export default function Button({children, className, color, theme}) {

  switch(theme)
    {
      case 'small' :
        return (
          <div>
            <button className={`${className} px-5 py-3 upppercase shadow-xl text-white tracking-widset text-sm font-medium animate`}>
              {children}
            </button>
          </div>
        )

      case 'big' :
        return (
          <div>
            <button className={`${className} px-5 py-3 upppercase shadow-xl text-white tracking-widset text-sm font-medium animate`}>
              {children}
            </button>
          </div>
        )
      
      default :
        return (
          <div>
            <button className={`${className} px-5 py-3 upppercase shadow-xl text-white tracking-widset text-sm font-medium animate`}>
              {children}
            </button>
          </div>
        )
    }
}
