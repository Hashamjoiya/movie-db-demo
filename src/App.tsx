import React from 'react';
import { Movies } from './features/movies/Movies'
import './App.scss';

function App() {
  return (
    <div className="bg-slate-800 text-white App flex flex-col">
      <h1 className='text-3xl text-center p-4 font-semibold'>Movie <span className='text-indigo-400'>DB</span> Demo</h1>
      <Movies />
    </div>
  );
}

export default App;
