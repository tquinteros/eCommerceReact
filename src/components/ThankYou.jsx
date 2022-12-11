import React from 'react'
import { useParams } from 'react-router-dom';

export default function ThankYou() {
    const id = useParams().idOrder
    return (
    <div className='flex justify-center items-center min-h-screen'>
        <h3 className="text-3xl text-center">Gracias por su compra, su id de compra es: {id}</h3>
    </div>
  )
}
