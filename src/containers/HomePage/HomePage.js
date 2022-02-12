import React, {useEffect, useState} from 'react';
import {movieService} from "../../services/movie.service";
import MovieListCard from "../../components/MovieListCard/MovieListCard";

import css from './HomePage.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Poster from "../../components/Poster/Poster";
import {getAllMovie, getMovieByGenreThunk, searchMovieThunk} from "../../stor";

const HomePage = () => {

    const [top, setTop] = useState([]);
    useEffect(() => {
        movieService.topRatedMovies().then(value => setTop(value.results))
    }, [])

    const {movies, status, error} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        let page = 1;
        dispatch(getAllMovie(page))
    }, [])

    return (
        <div className={css.all}>
            <div>
                <div className={css.poster}>
                    {
                        <Poster movie={movies[0]}/>
                    }
                </div>

                <h2>Best movies:</h2>
                <div className={css.wrap}>
                    {
                        top.map(movie => <Link key={movie.id} to={'/movie/' + movie.id}><MovieListCard
                            movie={movie}/></Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;