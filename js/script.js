"use strict";

const numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', "1")

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
};

const a = prompt("Один из последний просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?"),
      c = prompt("Один из последний просмотренных фильмов?", ""),
      d = prompt("Один из последний просмотренных фильмов?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)