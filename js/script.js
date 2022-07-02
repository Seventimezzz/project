"use strict";

first: for (let i = 1; i < 3; i++) {
    console.log(`Первый уровень: ${i}`);
    for (let j = 1; j < 3; j++) {
        console.log(`Второй уровень: ${j}`);
        for (let k = 1; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Третий уровень: ${k}`);
        }
    }
}

// let result = "";
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// const numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', "1")

// const personalMovieDB = {
//     count: numberOfFilmes,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false, 
// };

// const a = prompt("Один из последний просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?"),
//       c = prompt("Один из последний просмотренных фильмов?", ""),
//       d = prompt("Один из последний просмотренных фильмов?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB)