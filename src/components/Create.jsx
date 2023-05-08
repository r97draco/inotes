import React from 'react'

const Create = ({onClick}) => {
  function createNote(){
    alert("To Be added ...");
  }

  return (
    <div className='inline-block p-2'>
      <button 
      className='flex justify-center p-2 m-2 text-3xl text-right text-white bg-pink-500 rounded-md stroke-indigo-500'
      onClick={onClick}
      >
        Create 
      </button>
    </div>
  )
}

export default Create