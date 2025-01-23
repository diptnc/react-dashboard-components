'use client'
import React, { forwardRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef(
  (
    {
      label,
      onClickFunction,
      type = "default",
      className = "",
      iconClassName = "",
      disabled = false,
      icon,
      arrow = false,
      ...rest
    },
    ref
  ) => {
    const baseClasses = 'flex items-center p-4 rounded transition-all group disabled:opacity-80 disabled:cursor-not-allowed text-sm font-medium ';
    const iconBaseClasses = 'mr-2';
    const typeClasses = {
      default: 'bg-gray-800 hover:bg-gray-700 text-white border border-black hover:border-gray-900',
      primary: 'bg-primary hover:bg-primary-hover text-primary-text hover:text-primary-text-hover border border-primary-border hover:border-primary-border-hover',
      danger: 'bg-red-600 hover:bg-red-700 text-white border border-red-700 hover:border-red-800',
      cancel: 'bg-yellow-500 hover:bg-yellow-600 text-white border border-yellow-600 hover:border-yellow-700',
    };


    const buttonClass = twMerge(
      baseClasses,
      typeClasses[type],
      className,
      
    );

    const iconClass = twMerge(
      iconBaseClasses,
      iconClassName
    );

    return (
      <button
        ref={ref}
        className={buttonClass}
        onClick={disabled ? undefined : onClickFunction}
        disabled={disabled}
        {...rest}
      >
        {icon && <span className={iconClass}>{icon}</span>}
        {label}
        {arrow && !disabled && <span className="relative ml-2 transition-all translate-x-0 group-hover:translate-x-1"><IoIosArrowForward />
          </span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;