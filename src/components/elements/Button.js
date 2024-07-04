import React from 'react'

export default function Button({children, className, color, theme}) {

  let background

  // if(color === 'secondary')
  //   {
  //     background = "bg-secondary hover:bg-secondaryHover"
  //   }
  // else if(color === 'danger')
  //   {

  //     background = 'bg-danger hover:bg-dangerHover'
  //   }
  // else{
  //   background = "bg-primary hover:bg-primaryHover"
  // }
  switch(color)
  {
    case 'secondary' : background = "bg-secondary hover:bg-secondaryHover"
      break
    case 'danger' : background = "bg-danger uppercase hover:bg-dangerHover"
      break
    default : background = "bg-primary hover:bg-primaryHover"
  }

  switch(theme)
    {
      case 'small' :
        return (
          <div>
            <button className={`${className} ${background} px-4 py-2 upppercase shadow-xl text-white text-xs font-medium animate`}>
              {children}
            </button>
          </div>
        )

      case 'big' :
        return (
          <div>
            <button className={`${className} ${background} px-8 py-4 upppercase shadow-xl text-white text-base font-medium animate`}>
              {children}
            </button>
          </div>
        )
      
      default :
        return (
          <div>
            <button className={`${className} ${background} px-4 py-3 upppercase shadow-xl text-white text-sm font-medium animate`}>
              {children}
            </button>
          </div>
        )
    }
}
