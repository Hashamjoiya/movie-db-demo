import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { QueryOptions } from "../../models/api";
import { getMoviesBySearch, getTopRatedMovies } from "./moviesAPI";

export interface MoviesState {
    value: {
        page: number,
        total_pages: number,
        total_results: number,
        results: any[]
    };
    status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
    value: {
        page: 1,
        total_pages: 1,
        total_results: 0,
        results: []
    },
    status: 'idle'
}

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (options: QueryOptions) => {
        if (!options.searchParam || options.searchParam === '')
            return getTopRatedMovies(options)
        //fetch by search
        return getMoviesBySearch(options)
    }
)

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = 'failed';
            });
    },
})

export const moviesState = (state: RootState) => state.movies.value;

export default moviesSlice.reducer;