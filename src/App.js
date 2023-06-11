import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL='http://www.omdbapi.com?apikey=9fa13541';




const App = () =>{
    const [movies, setMovies]=useState([]);
    const [searchTerm,SetSearchTerm] =useState('');
    const searchMovies = async (title)=>{
        const respone = await fetch(` ${API_URL}&s=${title} `);
        const data= await respone.json();

        setMovies(data.Search);
    }
    useEffect(() => {searchMovies('avenger')},[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => SetSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))
                        }
                    </div>
                ):(
                    <div className="container">
                        <h2>No movies found</h2>
                     </div>
                )}
            
        </div>
    );
}
export default App;