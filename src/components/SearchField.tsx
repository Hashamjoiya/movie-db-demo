import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchMovies } from "../features/movies/movieSlice";
import './SearchField.scss'

export function SearchField() {
    const [searchEnabled, toggleSearch] = useState(false)
    const dispatch = useAppDispatch()

    let searchTimer: NodeJS.Timeout | null = null
    const handleInput = (value: string) => {
        if (searchTimer) {
            clearTimeout(searchTimer)
            searchTimer = null
        }

        //wait 1 second for further before making api request
        searchTimer = setTimeout(() => {
            dispatch(fetchMovies({ searchParam: value }))
            if (searchTimer) searchTimer = null
        }, 1000)
    }

    if (!searchEnabled)
        return (
            <div className="px-4 cursor-pointer hover:text-indigo-400 search-icon">
                <svg onClick={() => toggleSearch(!searchEnabled)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        );
    return (
        <div className="mt-4 md:mt-0 md:px-4 w-72 form-group">
            <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-3xl
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none"
                placeholder="Search Movie"
                onChange={(event) => handleInput(event.target.value)} />
        </div>
    );
}