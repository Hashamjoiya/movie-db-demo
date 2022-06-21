import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { moviesState } from "../features/movies/movieSlice";
import { BarChart } from "./BarChart";

import './MovieStats.scss'

export function MovieStats() {
    let movies = useAppSelector(moviesState);
    const [topTenMovies, setTopTenMovies] = useState<any[]>([])

    useEffect(() => {
        setTopTenMovies(movies.results?.slice(0, 10))
    }, [movies])

    const parsedData = (moviesData: any[]) => {
        return moviesData.map(e => ({
            id: e.id,
            title: e.original_title,
            rating: e.vote_average,
            votes: e.vote_count
        }))
    }

    return (
        <div className="md:px-4 lg:px-8 xl:px-12 flex flex-col items-center">
            {topTenMovies?.length < 1 && <h1>Nothing to Show</h1>}
            {topTenMovies?.length > 0 &&
                <div>
                    <div>
                        <BarChart data={parsedData(topTenMovies)} />
                    </div>
                    <div>
                        <BarChart data={parsedData(topTenMovies)} showVotes />
                    </div>
                </div>
            }
        </div>
    );
}