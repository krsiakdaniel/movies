import React from 'react';

export const SearchMovies = () => {

    const getMoviesData = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const BASE_URL = 'https://api.themoviedb.org/3/search/movie'
        const API_KEY = '295bad0176d1e0739cd94f5f2594968b'
        const lang = 'en-US'
        let searchQuery = 'Jurassic Park'
        let numberOfResultPages = 1

        const searchUrl = `${BASE_URL}?api_key=${API_KEY}&language=${lang}&query=${searchQuery}&page=${numberOfResultPages}`

        try {
            const response = await fetch(searchUrl)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className="form" onSubmit={getMoviesData}>
            <input className="input" type="text" name="query" placeholder="Movie Name"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
