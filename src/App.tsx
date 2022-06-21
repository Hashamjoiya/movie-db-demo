import React, { useEffect, useState } from 'react';
import { SearchField } from './components/SearchField'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.scss';

function App() {
  const [searchField, toggleSearchField] = useState(true)

  let location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') toggleSearchField(true)
    else toggleSearchField(false)
  }, [location])

  return (
    <div className="bg-slate-800 text-white App flex flex-col">
      <div className='p-4 flex flex-row flex-wrap justify-center items-center'>
        <h1 className='text-3xl text-center font-semibold'>Movie <span className='text-indigo-400'>DB</span> Demo</h1>
        {searchField && <Link to="/stats" className='ml-4 px-4 py-2 border-0 rounded-lg bg-indigo-400 duration-300 hover:bg-indigo-500 text-white'>Stats</Link>}
        {searchField && <SearchField />}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
