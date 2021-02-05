import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {StyledMovieImage} from './components/Card/Card.style';

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = "e81eda1a3d406ad7fdbef13f4538a679"; //temporary
const baseImageUrl = "https://image.tmdb.org/t/p/w1280";

export default function MovieDetails () {
    const[movieDetails, setMovieDetails] = useState()

    const {id} = useParams();
    console.log('id', id)

    useEffect(() => {
        axios.get(
            movieDetailBaseUrl + id, {params: {
                api_key: apiKey,
            }}
        )
        .then(res=> setMovieDetails(res?.data))
        .catch()
        .finally()
    }, [id]);

    return (
        <div>
            <h1>{movieDetails?.original_title}</h1>
            <StyledMovieImage src={baseImageUrl + movieDetails?.poster_path} alt={"Movie Poster"}/>
            <p>{movieDetails?.overview}</p>
        </div>
    )
}