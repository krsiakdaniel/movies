import React from 'react';

export default function SearchMovies() {
    return (
        <form className="form">
            <input className="input" type="text" name="query" placeholder="Movie Name"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
