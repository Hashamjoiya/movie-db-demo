import React from 'react';
import { Movies } from './features/movies/Movies'
import { SearchField } from './components/SearchField'
import './App.scss';

function App() {
  return (
    <div className="bg-slate-800 text-white App flex flex-col">
      <div className='p-4 flex flex-row flex-wrap justify-center items-center'>
        <h1 className='text-3xl text-center font-semibold'>Movie <span className='text-indigo-400'>DB</span> Demo</h1>
        <SearchField />
      </div>
      <Movies />
    </div>
  );
}

export default App;
