import './App.css';
import Create from './components/Create';
import Notes from './components/Notes';
import { useState } from 'react';
import CreateCard from './components/CreateCard';

function App() {
  const [popup, setPopup] = useState(false);
  function handleCreate(){
    setPopup(!popup);
  }
  return (
    <div className='min-h-screen root' >
      <header className='flex justify-between p-0 m-0 text-6xl text-center bg-purple-300 title' >
        <h2 className='p-2 m-2 title'>iNotes</h2>
        <Create onClick={handleCreate}/>
      </header>
      {popup && <CreateCard/>}
      <div className='flex'>
        
        <Notes />
      </div>
    </div>
  );
}

export default App;
