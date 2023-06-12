import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const MovieContext=createContext()

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({children}) => {
    const[movie, setMovie]=useState([])
    const[loading, setLoading]=useState(false)

    useEffect(()=>{
getMovies(FEATURED_API)
    },[])

    const getMovies=(API)=>{
axios.get(API).then(res=>console.log(res.data.results)).catch(err=>console.log(err))
    }
  return (
    <MovieContext.Provider value={{movie, loading, getMovies}}>{children}</MovieContext.Provider>
  )
}

export default MovieContextProvider