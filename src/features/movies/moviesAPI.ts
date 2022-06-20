import environment from '../../environments/environment'
import { QueryOptions } from '../../models/api'

const basePath = environment.movieDB.apiURL + 'movie/'
const apiParam = 'api_key=' + environment.movieDB.apiKey

export function getTopRatedMovies(options: QueryOptions) {
    let url = basePath + 'top_rated?' + apiParam
    if (options?.page) url += ('&page=' + options.page)
    if (options.region) url += ('&language=' + options.region)
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}

export function getMoviesBySearch(options: QueryOptions) {
    if (!options.searchParam) return Promise.reject(new Error('Search Parameter missing'))

    let url = environment.movieDB.apiURL + 'search/movie?' + apiParam
    url += ('&query=' + encodeURI(options.searchParam))
    if (options?.page) url += ('&page=' + options.page)
    if (options.region) url += ('&language=' + options.region)
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
}