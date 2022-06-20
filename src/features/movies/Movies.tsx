import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMovies, moviesState } from './movieSlice';
import './Movies.scss';
import { useNavigate } from 'react-router-dom';

export function Movies() {
    const movies = useAppSelector(moviesState);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const posterBasePath = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        dispatch(fetchMovies({ page: 1 }))
    }, [])

    const handleClick = (id: number) => {
        navigate(`/${id}/details`)
    }

    return (
        <div className='md:px-12 xl:px-24 py-8 h-full overflow-y-auto movies-container'>
            {movies.results?.length > 0 &&
                <div className="w-2/3 xl:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-16 justify-center items-center">
                    {movies.results.map(movie =>
                        <div key={movie.id} onClick={() => handleClick(movie.id)} className="mx-auto rounded-md h-64 w-44 bg-slate-400 duration-500 shadow-slate-700 shadow-md cursor-pointer hover:shadow-lg hover:h-72 hover:w-48 flex flex-col movies-card">
                            <img className='poster h-4/5' src={posterBasePath + movie.poster_path}></img>
                            <div className='p-px h-1/5 flex flex-row justify-center items-center text-center'>{movie.title}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}