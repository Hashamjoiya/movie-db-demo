import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../features/movies/moviesAPI";

import './MovieDetails.scss'

export function MovieDetails() {
    const { movie } = useParams()
    const [movieData, setMovieData] = useState<any | null>(null)
    const posterBasePath = 'https://image.tmdb.org/t/p/w500'

    getMovieDetails(Number(movie))
        .then(movieData => {
            setMovieData(movieData)
        })

    if (!movieData) return null;
    return (
        <div className="md:px-4 lg:px-8 xl:px-12 flex flex-row flex-wrap justify-center items-center">
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
                <img className="mx-auto rounded-md h-72 w-48" src={posterBasePath + movieData.poster_path}></img>
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5  text-slate-200 bg-slate-600 px-4 py-2 rounded-md m-4 md:m-0">
                <div>
                    <h1 className="text-2xl font-semibold text-indigo-400">{movieData.original_title}</h1>
                    <p className="font-semibold text-slate-400 sub-title">
                        {(movieData.genres as { id: number, name: string }[]).map((genre, index) =>
                            <span key={genre.id} className={index > 0 ? 'ml-2' : ''}>{genre.name}</span>
                        )}
                    </p>
                    <p>{movieData.overview}</p>
                </div>
                <div className="pt-4 pb-2 px-2">
                    <ul>
                        <li>Language: {movieData.original_language}</li>
                        <li>Release Date: {movieData.release_date}</li>
                        <li>Runtime: {Math.floor(movieData.runtime / 60)} hours, {movieData.runtime % 60} minutes</li>
                        <li>Vote Average: {movieData.vote_average}</li>
                        <li>Vote Count: {movieData.vote_count}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}