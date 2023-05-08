import React from 'react'

const Card = () => {
  return (
    <div className='flex-col inline-block p-2 m-2 bg-red-500 rounded-md bg-opacity-30 backdrop-blur-sm '>
      <h3 className='text-3xl text-gray-600'>Title</h3>
      <h5 className='text-lg'>Date</h5>
    </div>  
  )
}

export default Card