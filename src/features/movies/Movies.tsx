import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMovies, moviesState } from './movieSlice';

export function Movies() {
    const movies = useAppSelector(moviesState);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div>Hi</div>
            <button onClick={() => dispatch(fetchMovies({ page: 1 }))}>Fetch</button>
            {movies.results?.length > 0 &&
                <div className="grid grid-cols-4 gap-4">
                    {movies.results.map(movie =>
                        <div>{movie.title}</div>
                    )}
                </div>
            }
        </div>
    );
}