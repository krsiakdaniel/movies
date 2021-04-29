import React from 'react';
import './App.css';
import SearchMovies from './SearchMovies';

class App extends React.Component {
    render() {
        return (
            <div className="container flex">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies />
            </div>
        );
    }
}
export default App
