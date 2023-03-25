import React, { FC } from 'react'

const Button:FC <{ text:string }> = ({text}) => {
    // props.text // To receive the text passed  in (props) while using the button
    // same can be done by destructuring {text} in place of (props)
  return (
    <button className='bg-primary text-white text-lg font-medium px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 duration-300'>
        {text}
    </button>
  )
}

export default Button