import React from 'react'

export default function Button(props) {
  return (
    <button className='py-2 px-5 rounded bg-black hover:opacity-75 duration-150 text-white'>
    {props.children}
</button>
  )
}
