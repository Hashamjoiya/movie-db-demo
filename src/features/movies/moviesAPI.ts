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