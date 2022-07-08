"use strict";

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let str = '';

function availableCurr(arr, missingCurr) {
    
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

console.log(str);