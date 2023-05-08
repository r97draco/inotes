import React, { useState } from 'react';


const CreateCard = () => {
  const [note, setNote] = useState("");
  const handleChange =() => {
    
  }
  return (
    <div className='py-2 mx-2'>
      <form>
        Write your note here...

      </form>
    </div>
  )
}

export default CreateCard