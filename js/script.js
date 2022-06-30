"use strict";

const numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', "1")

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
}