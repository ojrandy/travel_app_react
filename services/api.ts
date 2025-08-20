import * as querystring from "node:querystring";

export const TMDM_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_TOKEN}`
    }
}
// A function that calls one endpoint
export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query
        ? `${TMDM_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDM_CONFIG.BASE_URL}'discover/movie?sort_by=popularity.desc';`

    const response = await fetch(endpoint, {
       method: 'GET',
       headers: TMDM_CONFIG.headers,
    });

    // Checking if the response is okay or not.
    if(!response.ok){
        //@ts-ignore
        throw new Error('Failed to fetch movies.', response.statusText);
    }

    const data = await response.json();

    return  data.result;
}