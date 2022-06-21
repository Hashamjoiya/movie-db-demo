import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { moviesState } from "../features/movies/movieSlice";

import './MovieStats.scss'

export function MovieStats() {
    let movies = useAppSelector(moviesState);
    const [topTenMovies, setTopTenMovies] = useState<any[]>([])

    useEffect(() => {
        setTopTenMovies(movies.results?.slice(0, 10))
    }, [movies])

    return (
        <div className="md:px-4 lg:px-8 xl:px-12">
            {topTenMovies?.length < 1 && <h1>Nothing to Show</h1>}
            {topTenMovies?.length > 0 &&
                <div>
                    HI
                </div>
            }
        </div>
    );
}