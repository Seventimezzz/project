"use strict";

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 4; i < data.length; i--) {
        result[i] = data[i] 
    }
    
    console.log(result);
    // Не трогаем
    return result;
}
thirdTask()