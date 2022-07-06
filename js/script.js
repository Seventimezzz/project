 "use strict";

 let numberOfFilmes;

 function start() {
    numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilmes == '' || numberOfFilmes == null || isNaN(numberOfFilmes)) {
        numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
 }

start();

 const personalMovieDB = {
     count: numberOfFilmes,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };

 function writeYourGenres() {

    for (let i = 1; i < 4; i++) {
       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
 }

 writeYourGenres();

 function showMyDB() {
    if (personalMovieDB['privat'] == false) {
        console.log(personalMovieDB);
    }
 }

showMyDB();

 function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последний просмотренных фильмов?", "").trim(),
              b = prompt("На сколько оцените его?", "").trim();
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
     }
 }

 rememberMyFilms();

 function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы посмотрели слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классик') ;
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка!');
    }
 }

 detectPersonalLevel();


    //  ПОДСЧИТАЛИ КОЛ-ВО КЛЮЧЕЙ В МАССИВЕ
//  "use strict";
// const option = {
//     math: 5,
//     number: 'five'
// };

// console.log(Object.keys(option).length);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let k = 1; k < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i < data.length; i--) {
//         result[i - 1] = data[data.length - i];
//     }
    
//     console.log(result);
//     // Не трогаем
//     return result;
// }
// thirdTask()

// Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
    
//     let dataLenght = data.length;
//     for (let i = 0; i < dataLenght; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     // Не трогаем
//     return data;
// }

// secondTask()

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     let lenghtStroke = arr.length;
//     for (let i = 0; i < lenghtStroke; i++) {
//         result[i] = arr[i];
//     }
    
//     // Не трогаем
//     console.log(result);
//     return result;
// }

// firstTask()




// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);
// return arrayOfNumbers;


// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

//    for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//    }



// first: for (let i = 1; i < 3; i++) {
//     console.log(`Первый уровень: ${i}`);
//     for (let j = 1; j < 3; j++) {
//         console.log(`Второй уровень: ${j}`);
//         for (let k = 1; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Третий уровень: ${k}`);
//         }
//     }
// }

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