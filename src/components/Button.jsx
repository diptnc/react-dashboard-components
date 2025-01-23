'use client'
import React from 'react'

const Button = ({ label, onClickFunction, type, className = "", disabled, icon, ...props }) => {

  //implement switch case to set color to the button depending on type

  switch (type) {
    case 'danger':
      className += 'bg-red-600 hover:bg-red-700 text-white';
      break;

    case 'cancel':
      className += 'bg-gray-600 hover:bg-gray-700 text-white';
      break;

    default:
      className += 'bg-primary hover:bg-violet-700 text-white hover:border-violet-800 border-primary-border transition-all';
      break;
  }


  return (
    <div>
      <button onClick={() => onClickFunction ? onClickFunction() : null} type={type}
        className={`${className} 
       
         p-3 flex items-center font-medium justify-center
        `} disabled={disabled} {...props}>

        {icon && icon
          ? <div className='pr-2'>{icon}</div>
          : ''
        }
        {label}

      </button>
    </div>
  )
}

export default Button