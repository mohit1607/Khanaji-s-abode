import React from 'react'

const ButtonOutline = ({
    children = "Button",
    onClick = () => {}, 
    className = ''
}) => {
  return (
    <button onClick={onClick} className={'border-2 border-sea-green font-bold px-3 py-2 text-sea-green rounded font-kaivalya' + className}>
        {children}
    </button>
  )
}

export default ButtonOutline